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
            <li>Provide a link for the hosted video</li>
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
import { cyrb53, isValidHttpUrl } from '@/assets/js/utils/helpers.js';

export default {
  name: 'NativeSource',

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

      if (!isValidHttpUrl(this.rawSource)) {
        this.invalidateForm('Expecting a valid http URL.');
        return;
      }

      // we assume we are going for video for now
      this.source.type = 'video';
      this.source.href = this.rawSource;
      this.source.id = cyrb53(this.rawSource);
    },
    saveSource () {
      this.source.platform = 'native';

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
</script>
