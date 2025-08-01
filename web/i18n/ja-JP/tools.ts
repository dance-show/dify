const translation = {
  title: 'ツール',
  createCustomTool: 'カスタムツールを作成する',
  customToolTip: 'Dify カスタムツールの詳細',
  type: {
    all: 'すべて',
    builtIn: 'ツール',
    custom: 'カスタム',
    workflow: 'ワークフロー',
  },
  contribute: {
    line1: '私は',
    line2: 'Dify へのツールの貢献に興味があります。',
    viewGuide: 'ガイドを見る',
  },
  author: '著者：',
  auth: {
    authorized: '認証済み',
    setup: '使用するための認証を設定する',
    setupModalTitle: '認証の設定',
    setupModalTitleDescription: '資格情報を構成した後、ワークスペース内のすべてのメンバーがアプリケーションのオーケストレーション時にこのツールを使用できます。',
  },
  includeToolNum: '{{num}}個のツールが含まれています',
  addTool: 'ツールを追加する',
  addToolModal: {
    type: 'タイプ',
    category: 'カテゴリー',
    add: '追加',
    added: '追加済',
    manageInTools: 'ツールリストに移動して管理する',
    custom: {
      title: 'カスタムツールはありません',
      tip: 'カスタムツールを作成する',
    },
    workflow: {
      title: '利用可能なワークフローツールはありません',
      tip: 'スタジオでワークフローをツールに公開する',
    },
    mcp: {
      title: '利用可能なMCPツールはありません',
      tip: 'MCPサーバーを追加する',
    },
    agent: {
      title: 'Agent strategy は利用できません',
    },
  },
  createTool: {
    title: 'カスタムツールを作成する',
    editAction: '設定',
    editTitle: 'カスタムツールを編集する',
    name: '名前',
    toolNamePlaceHolder: 'ツール名を入力してください',
    nameForToolCall: 'ツールコールの名前',
    nameForToolCallPlaceHolder: '機械認識に使用される名前，例えば、getCurrentWeather、list_pets',
    nameForToolCallTip: '数字、文字、アンダースコアのみがサポートされます。',
    description: 'ツールの説明',
    descriptionPlaceholder: 'ツールの使い方の簡単な説明。例えば、特定の場所の温度を知るためなど。',
    schema: 'スキーマ',
    schemaPlaceHolder: 'ここに OpenAPI スキーマを入力してください',
    viewSchemaSpec: 'OpenAPI-Swagger 仕様を表示する',
    importFromUrl: 'URL からインポートする',
    importFromUrlPlaceHolder: 'https://...',
    urlError: '有効な URL を入力してください',
    examples: '例',
    exampleOptions: {
      json: '天気 (JSON)',
      yaml: 'ペットストア (YAML)',
      blankTemplate: '空白テンプレート',
    },
    availableTools: {
      title: '利用可能なツール',
      name: '名前',
      description: '説明',
      method: 'メソッド',
      path: 'パス',
      action: 'アクション',
      test: 'テスト',
    },
    authMethod: {
      title: '認証方法',
      type: '認証タイプ',
      keyTooltip: 'HTTP ヘッダーキー。アイデアがない場合は "Authorization" として残しておいてもかまいません。またはカスタム値に設定できます。',
      types: {
        none: 'なし',
        apiKeyPlaceholder: 'API キーの HTTP ヘッダー名',
        apiValuePlaceholder: 'API キーを入力してください',
        api_key_query: 'クエリパラメータ',
        queryParamPlaceholder: 'APIキーのクエリパラメータ名',
        api_key_header: 'ヘッダー',
      },
      key: 'キー',
      value: '値',
      queryParam: 'クエリパラメータ',
      queryParamTooltip: 'APIキーのクエリパラメータとして渡す名前、例えば「https://example.com/test?key=API_KEY」の「key」。',
    },
    authHeaderPrefix: {
      title: '認証タイプ',
      types: {
        basic: 'ベーシック',
        bearer: 'ベアラー',
        custom: 'カスタム',
      },
    },
    privacyPolicy: 'プライバシーポリシー',
    privacyPolicyPlaceholder: 'プライバシーポリシーを入力してください',
    toolInput: {
      title: 'ツール入力',
      name: '名前',
      required: '必須',
      method: 'メソッド',
      methodSetting: '設定',
      methodSettingTip: 'ユーザーがツール設定を入力する',
      methodParameter: 'LLM 入力',
      methodParameterTip: 'LLM は推論中に入力されます',
      label: 'ラベル',
      labelPlaceholder: 'ラベルを選択します (オプション)',
      description: '説明',
      descriptionPlaceholder: 'パラメータの意味の説明',
    },
    customDisclaimer: 'カスタム免責事項',
    customDisclaimerPlaceholder: 'カスタム免責事項を入力してください',
    confirmTitle: '保存しますか？',
    confirmTip: 'このツールを使用しているアプリは影響を受けます',
    deleteToolConfirmTitle: 'このツールを削除しますか？',
    deleteToolConfirmContent: 'ツールの削除は取り消しできません。ユーザーはもうあなたのツールにアクセスできません。',
  },
  test: {
    title: 'テスト',
    parametersValue: 'パラメーター＆値',
    parameters: 'パラメーター',
    value: '値',
    testResult: 'テスト結果',
    testResultPlaceholder: 'ここにテスト結果が表示されます',
  },
  thought: {
    using: '使用中',
    used: '使用済み',
    requestTitle: 'リクエスト先',
    responseTitle: 'レスポンス先',
  },
  setBuiltInTools: {
    info: '情報',
    setting: '設定',
    toolDescription: 'ツールの説明',
    parameters: 'パラメーター',
    string: '文字列',
    number: '数',
    required: '必須',
    infoAndSetting: '情報と設定',
    file: 'ファイル',
  },
  noCustomTool: {
    title: 'カスタムツールがありません！',
    content: 'AI アプリを構築するためのカスタムツールをここで追加および管理します。',
    createTool: 'ツールを作成する',
  },
  noSearchRes: {
    title: '申し訳ありません、結果がありません！',
    content: '検索に一致するツールが見つかりませんでした。',
    reset: '検索をリセット',
  },
  builtInPromptTitle: 'プロンプト',
  toolRemoved: 'ツールが削除されました',
  notAuthorized: 'ツールが認可されていません',
  howToGet: '取得方法',
  openInStudio: 'スタジオで開く',
  toolNameUsageTip: 'ツール呼び出し名、エージェントの推論とプロンプトの単語に使用されます',
  copyToolName: '名前をコピー',
  noTools: 'ツールが見つかりませんでした',
  mcp: {
    create: {
      cardTitle: 'MCPサーバー（HTTP）を追加',
      cardLink: 'MCPサーバー統合について詳しく知る',
    },
    noConfigured: '未設定',
    updateTime: '更新日時',
    toolsCount: '{{count}} 個のツール',
    noTools: '利用可能なツールはありません',
    modal: {
      title: 'MCPサーバー（HTTP）を追加',
      editTitle: 'MCPサーバー（HTTP）を編集',
      name: '名前とアイコン',
      namePlaceholder: 'MCPサーバーの名前を入力',
      serverUrl: 'サーバーURL',
      serverUrlPlaceholder: 'サーバーエンドポイントのURLを入力',
      serverUrlWarning: 'サーバーアドレスを更新すると、このサーバーに依存するアプリケーションに影響を与える可能性があります。',
      serverIdentifier: 'サーバー識別子',
      serverIdentifierTip: 'ワークスペース内でのMCPサーバーのユニーク識別子です。使用可能な文字は小文字、数字、アンダースコア、ハイフンで、最大24文字です。',
      serverIdentifierPlaceholder: 'ユニーク識別子（例：my-mcp-server）',
      serverIdentifierWarning: 'IDを変更すると、既存のアプリケーションではサーバーが認識できなくなります。',
      cancel: 'キャンセル',
      save: '保存',
      confirm: '追加して承認',
    },
    delete: 'MCPサーバーを削除',
    deleteConfirmTitle: '{{mcp}} を削除しますか？',
    operation: {
      edit: '編集',
      remove: '削除',
    },
    authorize: '承認',
    authorizing: '承認中...',
    authorizingRequired: '承認が必要です。',
    authorizeTip: '承認後、このページにツールが表示されるようになります。',
    update: '更新',
    updating: '更新中...',
    gettingTools: 'ツール取得中...',
    updateTools: 'ツール更新中...',
    toolsEmpty: 'ツールが読み込まれていません',
    getTools: 'ツールを取得',
    toolUpdateConfirmTitle: 'ツールリストの更新',
    toolUpdateConfirmContent: 'ツールリストを更新すると、既存のアプリケーションに重大な影響を与える可能性があります。続行しますか？',
    toolsNum: '{{count}} 個のツールが含まれています',
    onlyTool: '1つのツールが含まれています',
    identifier: 'サーバー識別子（クリックしてコピー）',
    server: {
      title: 'MCPサーバー',
      url: 'サーバーURL',
      reGen: 'サーバーURLを再生成しますか？',
      addDescription: '説明を追加',
      edit: '説明を編集',
      modal: {
        addTitle: 'MCPサーバーを有効化するための説明を追加',
        editTitle: '説明を編集',
        description: '説明',
        descriptionPlaceholder: 'このツールの機能とLLM（大規模言語モデル）での使用方法を説明してください。',
        parameters: 'パラメータ',
        parametersTip: '各パラメータの説明を追加して、LLMがその目的と制約を理解できるようにします。',
        parametersPlaceholder: 'パラメータの目的と制約',
        confirm: 'MCPサーバーを有効にする',
      },
      publishTip: 'アプリが公開されていません。まずアプリを公開してください。',
    },
  },
}

export default translation
