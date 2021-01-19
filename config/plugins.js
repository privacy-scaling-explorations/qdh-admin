module.exports = ({ env }) => ({
  upload: {
    provider: 'azure-storage',
    providerOptions: {
      account: env('ASURE_STORAGE_ACCOUNT_NAME'),
      accountKey: env('ASURE_KEY'),
      serviceBaseURL: env('STORAGE_URL'),
      containerName: env('STORAGE_CONTAINER_NAME'),
      defaultPath: 'assets',
      maxConcurrent: 10,
    },
  },
})
