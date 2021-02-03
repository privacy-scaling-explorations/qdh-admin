module.exports = ({ env }) => ({
  upload: {
    provider: 'azure-storage',
    providerOptions: {
      account: env('AZURE_STORAGE_ACCOUNT_NAME'),
      accountKey: env('AZURE_KEY'),
      serviceBaseURL: env('STORAGE_URL'),
      containerName: env('STORAGE_CONTAINER_NAME'),
      defaultPath: 'assets',
      maxConcurrent: 10,
    },
  },
})
