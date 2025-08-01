const translation = {
  title: 'Annotations',
  name: 'Annotation Reply',
  editBy: 'Answer edited by {{author}}',
  noData: {
    title: 'No annotations',
    description: 'You can edit annotations during app debugging or import annotations in bulk here for a high-quality response.',
  },
  table: {
    header: {
      question: 'question',
      answer: 'answer',
      createdAt: 'created at',
      hits: 'hits',
      actions: 'actions',
      addAnnotation: 'Add Annotation',
      bulkImport: 'Bulk Import',
      bulkExport: 'Bulk Export',
      clearAll: 'Delete All',
      clearAllConfirm: 'Delete all annotations?',
    },
  },
  editModal: {
    title: 'Edit Annotation Reply',
    queryName: 'User Query',
    answerName: 'Storyteller Bot',
    yourAnswer: 'Your Answer',
    answerPlaceholder: 'Type your answer here',
    yourQuery: 'Your Query',
    queryPlaceholder: 'Type your query here',
    removeThisCache: 'Remove this Annotation',
    createdAt: 'Created At',
  },
  addModal: {
    title: 'Add Annotation Reply',
    queryName: 'Question',
    answerName: 'Answer',
    answerPlaceholder: 'Type answer here',
    queryPlaceholder: 'Type query here',
    createNext: 'Add another annotated response',
  },
  batchModal: {
    title: 'Bulk Import',
    csvUploadTitle: 'Drag and drop your CSV file here, or ',
    browse: 'browse',
    tip: 'The CSV file must conform to the following structure:',
    question: 'question',
    answer: 'answer',
    contentTitle: 'chunk content',
    content: 'content',
    template: 'Download the template here',
    cancel: 'Cancel',
    run: 'Run Batch',
    runError: 'Run batch failed',
    processing: 'In batch processing',
    completed: 'Import completed',
    error: 'Import Error',
    ok: 'OK',
  },
  list: {
    delete: {
      title: 'Are you sure Delete?',
    },
  },
  batchAction: {
    selected: 'Selected',
    delete: 'Delete',
    cancel: 'Cancel',
  },
  errorMessage: {
    answerRequired: 'Answer is required',
    queryRequired: 'Question is required',
  },
  viewModal: {
    annotatedResponse: 'Annotation Reply',
    hitHistory: 'Hit History',
    hit: 'Hit',
    hits: 'Hits',
    noHitHistory: 'No hit history',
  },
  hitHistoryTable: {
    query: 'Query',
    match: 'Match',
    response: 'Response',
    source: 'Source',
    score: 'Score',
    time: 'Time',
  },
  initSetup: {
    title: 'Annotation Reply Initial Setup',
    configTitle: 'Annotation Reply Setup',
    confirmBtn: 'Save & Enable',
    configConfirmBtn: 'Save',
  },
  embeddingModelSwitchTip: 'Annotation text vectorization model, switching models will be re-embedded, resulting in additional costs.',
}

export default translation
