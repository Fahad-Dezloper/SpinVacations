import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {embeddingsIndexReferenceInput} from '@sanity/embeddings-index-ui' // Import the embeddings plugin

export default defineConfig({
  name: 'default',
  title: 'spin vacations',

  projectId: '4ulpsb6i',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), embeddingsIndexReferenceInput()],

  schema: {
    types: schemaTypes,
  },
})
