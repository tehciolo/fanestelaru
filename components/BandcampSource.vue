<template>
  <BModal
    v-model="isModalActive"
    :width="640"
    scroll="keep"
  >
    <div class="card">
      <div class="card-content">
        <div class="content">
          <ol style="margin-top: 0;">
            <li>Go to the album page on bandcamp</li>
            <li>Click on share/embed (under the album cover)</li>
            <li>Click on embed this album</li>
            <li>Select the biggest style</li>
            <li>Copy what shows up in the "Embed" field and paste below</li>
          </ol>

          <BField
            :type="formValidation.isFormValid ? undefined : 'is-danger'"
            :message="formValidation.isFormValid ? undefined : formValidation.error"
          >
            <BInput
              v-model.trim="rawSource"
              type="textarea"
              @input="checkSource"
            ></BInput>
          </BField>

          <p class="control">
            <BButton
              class="button is-primary"
              :disabled="!formValidation.isFormValid"
              @click="saveSource"
            >
              Save
            </BButton>
          </p>
        </div>
      </div>
    </div>
  </BModal>
</template>

<script>
import { Left, Right, pipe, chain, either, concat } from 'sanctuary';

export default {
  name: 'BandcampSource',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      isModalActive: false,
      source: getSourceInitialState(),
      formValidation: getFormValidationInitialState(),
      rawSource: '',
    };
  },

  watch: {
    value: {
      handler (val, oldVal) {
        if (val !== oldVal) {
          this.isModalActive = val;
        }
      },
      immediate: true,
    },

    isModalActive: {
      handler (val, oldVal) {
        if (val !== oldVal) {
          this.$emit('input', val);
        }
      },
    },
  },

  methods: {
    checkSource () {
      this.resetFormValidation();

      const result = pipe([
        parseHTMLFromString,
        chain(checkRoot),
        chain(checkSrcAttribute),
        chain(getSourceId),
        chain(getSourceSlug),
      ])(this.rawSource);

      either(this.invalidateForm)((result) => {
        this.source = concat(this.source)(result);
      })(result);
    },
    saveSource () {
      this.source.platform = 'bandcamp';

      this.$emit('save-source', this.source);

      // reset
      this.source = getSourceInitialState();
      this.rawSource = '';
      // close
      this.isModalActive = false;
    },

    editSource (sourceToEdit) {
      this.source = sourceToEdit;
    },

    resetFormValidation () {
      this.formValidation = getFormValidationInitialState();
    },

    invalidateForm (error) {
      this.formValidation.isFormValid = false;
      this.formValidation.error = error;
    },
  },
};

function getSourceInitialState () {
  return {
    platform: null,
    id: null,
    slug: null,
    type: null,
    startId: null,
    href: null,
  };
}

function getFormValidationInitialState () {
  return {
    isFormValid: true,
    error: null,
  };
}

function parseHTMLFromString (input) {
  const parser = new DOMParser();
  try {
    const { body } = parser.parseFromString(input, 'text/html');

    return Right(body);
  } catch (error) {
    return Left(error);
  }
}

function checkRoot (body) {
  if (body.firstChild !== body.lastChild) {
    return Left('Expecting exactly ONE root element.');
  }

  if (body.firstChild?.tagName !== 'IFRAME') {
    return Left('Expecting root element to be an <iframe>.');
  }

  return Right(body);
}

function checkSrcAttribute (body) {
  const srcAttr = body.firstChild?.attributes.getNamedItem('src');

  if (!srcAttr) {
    return Left('Expecting <iframe> to have a [src] attribute.');
  }
  return Right(body);
}

function getSourceId (body) {
  try {
    const srcAttr = body.firstChild?.attributes.getNamedItem('src').textContent;
    const albumId = (new URL(srcAttr)).pathname.split('/').find(part => part.startsWith('album')).replace('album=', '');

    return Right([body, { id: albumId }]);
  } catch (_) {
    return Left('Expecting <iframe> [src] attribute to contain a valid URL.');
  }
}

function getSourceSlug ([body, result]) {
  const parser = new DOMParser();
  try {
    const link = parser.parseFromString(body.firstChild?.firstChild?.nodeValue, 'text/html');
    const hrefAttr = link.body.firstChild?.attributes.getNamedItem('href');
    const slug = (new URL(hrefAttr.textContent)).pathname.split('/').at(-1);

    return Right({ ...result, slug });
  } catch (_) {
    return Left('Something went wrong while parsing the album slug. Please check the embed code.');
  }
}
</script>
