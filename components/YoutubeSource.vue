<template>
  <BModal
    v-model="isModalActive"
    :width="640"
    scroll="keep"
  >
    <div class="card">
      <div class="card-content">
        <div class="content">
          <BField label="Type">
            <BSelect v-model="source.type">
              <option
                v-for="type in Object.values(TYPES)"
                :key="type"
                :value="type"
              >
                {{ type }}
              </option>
            </BSelect>
          </BField>

          <template v-if="source.type === TYPES.PLAYLIST">
            <ol style="margin-top: 0;">
              <li>Go to the playlists section on a youtube channel</li>
              <li>Click on the playlist thumbnail (play all)</li>
              <li>Copy the contents of the address bar and paste below</li>
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
          </template>

          <template v-if="source.type === TYPES.VIDEO">
            <ol style="margin-top: 0;">
              <li>Go to the youtube video</li>
              <li>Copy the contents of the address bar and paste below</li>
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
          </template>

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
const TYPES = {
  VIDEO: 'video',
  PLAYLIST: 'playlist',
};

export default {
  name: 'YoutubeSource',

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      TYPES,
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

      let resource;

      try {
        resource = new URL(this.rawSource);
      } catch (error) {
        this.invalidateForm('Expecting a valid URL.');
        return;
      }

      if (resource.hostname !== 'www.youtube.com') {
        this.invalidateForm('Expecting a YouTube URL.');
        return;
      }

      if (!resource.searchParams.has('v')) {
        this.invalidateForm('Expecting a starting video ID');
        return;
      }

      if (this.source.type === TYPES.PLAYLIST && !resource.searchParams.has('list')) {
        this.invalidateForm('Expecting a YouTube URL for a playlist.');
        return;
      }

      if (this.source.type === TYPES.PLAYLIST) {
        this.source.startId = resource.searchParams.get('v');
        this.source.id = resource.searchParams.get('list');
      }

      if (this.source.type === TYPES.VIDEO) {
        this.source.id = resource.searchParams.get('v');
      }
    },
    saveSource () {
      this.source.platform = 'youtube';

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
