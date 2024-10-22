import type { DefaultTranslationsObject, Language } from '../types.js'

export const rsTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Налог',
    accountOfCurrentUser: 'Налог тренутног корисника',
    accountVerified: 'Nalog je uspešno verifikovan.',
    alreadyActivated: 'Већ активирано',
    alreadyLoggedIn: 'Већ пријављен',
    apiKey: 'АПИ кључ',
    authenticated: 'Autentifikovan',
    backToLogin: 'Назад на пријаву',
    beginCreateFirstUser: 'На самом почетку креирај свог првог корисника',
    changePassword: 'Промени лозинку',
    checkYourEmailForPasswordReset: 'Проверите е-пошту и поруку са линком за промену лозинке.',
    confirmGeneration: 'Потврди креирање',
    confirmPassword: 'Потврди лозинку',
    createFirstUser: 'Креирај првог корисника',
    emailNotValid: 'Адреса е-поште није валидна',
    emailOrUsername: 'Email ili Korisničko ime',
    emailSent: 'Порука е-поште прослеђена',
    emailVerified: 'Uspešno verifikovan email.',
    enableAPIKey: 'Омогући API кључ',
    failedToUnlock: 'Неуспешно откључавање.',
    forceUnlock: 'Принудно откључај',
    forgotPassword: 'Заборављена лозинка',
    forgotPasswordEmailInstructions:
      'Молимо Вас да унесете својy адресy е-поште. Примићете поруку са упутством за поновно постављање лозинке.',
    forgotPasswordQuestion: 'Заборављена лозинка?',
    forgotPasswordUsernameInstructions:
      'Unesite svoje korisničko ime ispod. Uputstva o tome kako da resetujete svoju lozinku biće poslata na e-mail adresu koja je povezana sa vašim korisničkim imenom.',
    generate: 'Генериши',
    generateNewAPIKey: 'Генериши нови АПИ кључ',
    generatingNewAPIKeyWillInvalidate:
      'Генерисање новог АПИ кључа ће <1>поништити</1> претходни кључ. Да ли сте сигурни да желите наставити?',
    lockUntil: 'Закључај док',
    logBackIn: 'Поновна пријава',
    loggedIn: 'За пријаву са другим корисничким налогом потребно је прво <0>одјавити се</0>',
    loggedInChangePassword:
      'Да бисте променили лозинку, отворите свој <0>налог</0> и промените лозинку.',
    loggedOutInactivity: 'Одјављени се због неактивности.',
    loggedOutSuccessfully: 'Успешно сте одјављени',
    loggingOut: 'Odjavljuje se...',
    login: 'Пријава',
    loginAttempts: 'Покушаји пријаве',
    loginUser: 'Пријава корисника',
    loginWithAnotherUser:
      'За пријаву са другим корисничким налогом потребно је прво <0>одјавити се</0>',
    logOut: 'Одјава',
    logout: 'Одјава',
    logoutSuccessful: 'Uspešno ste se odjavili.',
    logoutUser: 'Одјава корисника',
    newAccountCreated:
      'Нови налог је креиран. Приступите налогу кликом на <a href="{{serverURL}}">{{serverURL}}</a>. Молимо Вас кликните на следећи линк или залепите адресу која се налази испод у претраживач да бисте потврдили адресу е-поште: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Након што потврдите адресу е-поште можете се улоговати.',
    newAPIKeyGenerated: 'Нови АПИ кључ генерисан.',
    newPassword: 'Нова лозинка',
    passed: 'Autentifikacija uspela',
    passwordResetSuccessfully: 'Успешно ресетована лозинка.',
    resetPassword: 'Промена лозинке',
    resetPasswordExpiration: 'Промена рока трајања лозинке',
    resetPasswordToken: 'Промена лозинке токена',
    resetYourPassword: 'Промени своју лозинку',
    stayLoggedIn: 'Остани пријављен',
    successfullyRegisteredFirstUser: 'Uspešno registrovan prvi korisnik.',
    successfullyUnlocked: 'Успешно откључано',
    tokenRefreshSuccessful: 'Osvežavanje tokena je uspešno.',
    unableToVerify: 'Није могуће потврдити',
    username: 'Korisničko ime',
    usernameNotValid: 'Korisničko ime koje ste uneli nije važeće.',
    verified: 'Потврђено',
    verifiedSuccessfully: 'Успешно потврђено',
    verify: 'Потврди',
    verifyUser: 'Потврди корисника',
    verifyYourEmail: 'Потврди своју адресу е-поште',
    youAreInactive:
      'Неактивни сте већ неко време и ускоро ћете бити аутоматски одјављени због сигурности. Да ли желите остати пријављени?',
    youAreReceivingResetPassword:
      'Примили сте поруку пошто сте Ви (или неко у ваше име) затражили промену лозинке налога. Молимо Вас кликните на линк или залепите адресу у свој претраживач да бисте завршили процес:',
    youDidNotRequestPassword:
      'Ако нисте затражили промену лозинке игноришите ову поруку и лозинка ће остати непромењена.',
  },
  error: {
    accountAlreadyActivated: 'Овај налог је већ активиран.',
    autosaving: 'Настао је проблем при аутоматском чувању овог документа.',
    correctInvalidFields: 'Молимо исправите невалидна поља.',
    deletingFile: 'Догодила се грешка при брисању датотеке.',
    deletingTitle:
      'Догодила се грешка при брисању {{title}}. Проверите интернет конекцију и покушајте поново.',
    emailOrPasswordIncorrect: 'Емаил или лозинка су неисправни.',
    followingFieldsInvalid_one: 'Ово поље је невалидно:',
    followingFieldsInvalid_other: 'Ова поља су невалидна:',
    incorrectCollection: 'Невалидна колекција',
    invalidFileType: 'Невалидан тип датотеке',
    invalidFileTypeValue: 'Невалидан тип датотеке: {{value}}',
    loadingDocument: 'Постоји проблем при учитавању документа чији је ИД {{id}}.',
    localesNotSaved_one: 'Следеће локалне поставке није могло бити сачувано:',
    localesNotSaved_other: 'Следеће локалне поставке нису могле бити сачуване:',
    logoutFailed: 'Odjava nije uspela.',
    missingEmail: 'Недостаје емаил.',
    missingIDOfDocument: 'Недостаје ИД документа да би се ажурирао.',
    missingIDOfVersion: 'Недостаје ИД верзије.',
    missingRequiredData: 'Недостају обавезни подаци.',
    noFilesUploaded: 'Ниједна датотека није учитана.',
    noMatchedField: 'Нема подударајућих поља за "{{label}}"',
    notAllowedToAccessPage: 'Немате дозволу за приступ овој страници.',
    notAllowedToPerformAction: 'Немате дозволу за извршење ове радње.',
    notFound: 'Тражени ресурс није пронађен.',
    noUser: 'Нема корисника',
    previewing: 'Постоји проблем при прегледу овог документа.',
    problemUploadingFile: 'Постоји проблем при учитавању датотеке.',
    tokenInvalidOrExpired: 'Токен је невалидан или је истекао.',
    tokenNotProvided: 'Token nije dostavljen.',
    unableToDeleteCount: 'Није могуће избрисати {{count}} од {{total}} {{label}}.',
    unableToUpdateCount: 'Није могуће ажурирати {{count}} од {{total}} {{label}}.',
    unauthorized: 'Нисте ауторизовани да бисте упутили овај захтев.',
    unknown: 'Дошло је до непознате грешке.',
    unPublishingDocument: 'Постоји проблем при поништавању објаве овог документа.',
    unspecific: 'Дошло је до грешке.',
    userEmailAlreadyRegistered: 'Корисник са датом имејл адресом је већ регистрован.',
    userLocked: 'Овај корисник је закључан због превеликог броја неуспешних покушаја пријаве.',
    usernameAlreadyRegistered: 'Korisnik sa datim korisničkim imenom je već registrovan.',
    usernameOrPasswordIncorrect: 'Korisničko ime ili lozinka koje ste uneli su netačni.',
    valueMustBeUnique: 'Вредност мора бити јединствена.',
    verificationTokenInvalid: 'Верификациони токен је невалидан.',
  },
  fields: {
    addLabel: 'Додај {{label}}',
    addLink: 'Додај линк',
    addNew: 'Додај нови',
    addNewLabel: 'Додај нови {{label}}',
    addRelationship: 'Додај релацију',
    addUpload: 'Додај учитавање',
    block: 'блокирање',
    blocks: 'блокирања',
    blockType: 'Врста блокирања',
    chooseBetweenCustomTextOrDocument:
      'Изаберите између уноса прилагођеног текста адресе или линка на други документ.',
    chooseDocumentToLink: 'Одаберите документ који желите линковати.',
    chooseFromExisting: 'Одаберите из постојећих.',
    chooseLabel: 'Одаберите {{label}}',
    collapseAll: 'Скупи све',
    customURL: 'Прилагођени линк',
    editLabelData: 'Уреди {{label}} податке',
    editLink: 'Измени линк',
    editRelationship: 'Измени однос',
    enterURL: 'Унеси адресу',
    internalLink: 'Интерни линк',
    itemsAndMore: '{{items}} и {{count}} више',
    labelRelationship: '{{label}} веза',
    latitude: 'Географска ширина',
    linkedTo: 'Повезани са <0>{{label}}</0>',
    linkType: 'Тип линка',
    longitude: 'Географска дужина',
    newLabel: 'Ново {{label}}',
    openInNewTab: 'Отвори у новој картици.',
    passwordsDoNotMatch: 'Лозинке нису исте.',
    relatedDocument: 'Повезани документ',
    relationTo: 'Веза са',
    removeRelationship: 'Уклони везу',
    removeUpload: 'Уклони пренос',
    saveChanges: 'Сачувај промене',
    searchForBlock: 'Претражи блок',
    selectExistingLabel: 'Одабери постојећу {{label}}',
    selectFieldsToEdit: 'Одаберите поља за промену',
    showAll: 'Покажи све',
    swapRelationship: 'Замени везу',
    swapUpload: 'Замени пренос',
    textToDisplay: 'Текст за приказ',
    toggleBlock: 'Пребаци блок',
    uploadNewLabel: 'Учитај нови {{label}}',
  },
  general: {
    aboutToDelete: 'Избрисаћете {{label}} <1>{{title}}</1>. Да ли сте сигурни?',
    aboutToDeleteCount_many: 'Избрисаћете {{count}} {{label}}',
    aboutToDeleteCount_one: 'Избрисаћете {{count}} {{label}}',
    aboutToDeleteCount_other: 'Избрисаћете {{count}} {{label}}',
    addBelow: 'Додај испод',
    addFilter: 'Додај филтер',
    adminTheme: 'Администраторска тема',
    and: 'И',
    anotherUserTakenOver: 'Други корисник је преузео уређивање овог документа.',
    applyChanges: 'Примени промене',
    ascending: 'Узлазно',
    automatic: 'Аутоматско',
    backToDashboard: 'Назад на контролни панел',
    cancel: 'Откажи',
    changesNotSaved: 'Ваше промене нису сачуване. Ако изађете сада, изгубићете промене.',
    clearAll: 'Obriši sve',
    close: 'Затвори',
    collapse: 'Скупи',
    collections: 'Колекције',
    columns: 'Колоне',
    columnToSort: 'Колона за сортирање',
    confirm: 'Потврди',
    confirmDeletion: 'Потврди брисање',
    confirmDuplication: 'Потврди дупликацију',
    copied: 'Копирано',
    copy: 'Копирај',
    create: 'Креирај',
    created: 'Креирано',
    createdAt: 'Креирано у',
    createNew: 'Креирај ново',
    createNewLabel: 'Креирај ново {{label}}',
    creating: 'Креира се',
    creatingNewLabel: 'Креирање новог {{label}}',
    currentlyEditing:
      'тренутно уређује овај документ. Ако преузмете контролу, биће блокирани да наставе са уређивањем и могу изгубити несачуване измене.',
    custom: 'Prilagođeno',
    dark: 'Тамно',
    dashboard: 'Контролни панел',
    delete: 'Обриши',
    deletedCountSuccessfully: 'Успешно избрисано {{count}} {{label}}.',
    deletedSuccessfully: 'Успешно избрисано.',
    deleting: 'Брисање...',
    depth: 'Dubina',
    descending: 'Опадајуће',
    deselectAllRows: 'Деселектујте све редове',
    document: 'Dokument',
    documentLocked: 'Документ је закључан',
    documents: 'Dokumenti',
    duplicate: 'Дупликат',
    duplicateWithoutSaving: 'Понови без чувања промена',
    edit: 'Уреди',
    editedSince: 'Измењено од',
    editing: 'Уређивање',
    editingLabel_many: 'Уређивање {{count}} {{label}}',
    editingLabel_one: 'Уређивање {{count}} {{label}}',
    editingLabel_other: 'Уређивање {{count}} {{label}}',
    editingTakenOver: 'Уређивање преузето',
    editLabel: 'Уреди {{label}}',
    email: 'Е-пошта',
    emailAddress: 'Адреса е-поште',
    enterAValue: 'Унеси вредност',
    error: 'Грешка',
    errors: 'Грешке',
    fallbackToDefaultLocale: 'Враћање на задати језик',
    false: 'Lažno',
    filter: 'Филтер',
    filters: 'Филтери',
    filterWhere: 'Филтер {{label}} где',
    globals: 'Глобали',
    goBack: 'Врати се',
    isEditing: 'уређује',
    language: 'Језик',
    lastModified: 'Задња промена',
    leaveAnyway: 'Свеједно напусти',
    leaveWithoutSaving: 'Напусти без чувања',
    light: 'Светло',
    livePreview: 'Преглед',
    loading: 'Учитавање',
    locale: 'Језик',
    locales: 'Преводи',
    menu: 'Мени',
    moveDown: 'Помери доле',
    moveUp: 'Помери горе',
    newPassword: 'Нова лозинка',
    next: 'Следећи',
    noFiltersSet: 'Нема постављених филтера',
    noLabel: '<Нема {{label}}>',
    none: 'Ниједан',
    noOptions: 'Нема опција',
    noResults:
      'Нема пронађених {{label}}. Могуће да {{label}} још увек не постоји или нема резултата у складу са постављеним филтерима.',
    notFound: 'Није пронађено',
    nothingFound: 'Ништа није пронађено',
    noValue: 'Без вредности',
    of: 'Од',
    only: 'Samo',
    open: 'Отвори',
    or: 'Или',
    order: 'Редослед',
    pageNotFound: 'Страница није пронађена',
    password: 'Лозинка',
    payloadSettings: 'Payload поставке',
    perPage: 'По страници: {{limit}}',
    previous: 'Prethodni',
    remove: 'Уклони',
    reset: 'Поново постави',
    row: 'Ред',
    rows: 'Редови',
    save: 'Сачувај',
    saving: 'Чување у току...',
    searchBy: 'Тражи по {{label}}',
    selectAll: 'Одаберите све {{count}} {{label}}',
    selectAllRows: 'Одаберите све редове',
    selectedCount: '{{count}} {{label}} одабрано',
    selectValue: 'Одабери вредност',
    showAllLabel: 'Прикажи све {{label}}',
    sorryNotFound: 'Нажалост, не постоји ништа што одговара вашем захтеву.',
    sort: 'Сортирај',
    sortByLabelDirection: 'Сортирај према {{label}} {{дирецтион}}',
    stayOnThisPage: 'Остани на овој страници',
    submissionSuccessful: 'Успешно слање',
    submit: 'Потврди',
    submitting: 'Podnošenje...',
    success: 'Uspeh',
    successfullyCreated: '{{label}} успешно креирано.',
    successfullyDuplicated: '{{label}} успешно дуплицирано.',
    takeOver: 'Превузети',
    thisLanguage: 'Српски (ћирилица)',
    titleDeleted: '{{label}} "{{title}}" успешно обрисано.',
    true: 'Istinito',
    unauthorized: 'Нисте ауторизовани',
    unsavedChangesDuplicate: 'Имате несачуване промене. Да ли желите наставити са дуплицирањем?',
    untitled: 'Без наслова',
    updatedAt: 'Ажурирано у',
    updatedCountSuccessfully: 'Успешно ажурирано {{count}} {{label}}.',
    updatedSuccessfully: 'Успешно ажурирано.',
    updating: 'Ажурирање',
    uploading: 'Пренос',
    user: 'Корисник',
    username: 'Korisničko ime',
    users: 'Корисници',
    value: 'Вредност',
    viewReadOnly: 'Прегледај само за читање',
    welcome: 'Добродошли',
  },
  operators: {
    contains: 'садржи',
    equals: 'једнако',
    exists: 'постоји',
    intersects: 'preseca',
    isGreaterThan: 'је веће од',
    isGreaterThanOrEqualTo: 'је веће од или једнако',
    isIn: 'је у',
    isLessThan: 'мање је од',
    isLessThanOrEqualTo: 'мање је или једнако',
    isLike: 'је као',
    isNotEqualTo: 'није једнако',
    isNotIn: 'није у',
    near: 'близу',
    within: 'unutar',
  },
  upload: {
    addFile: 'Додај датотеку',
    addFiles: 'Dodaj datoteke',
    bulkUpload: 'Masovno otpremanje',
    crop: 'Исеците слику',
    cropToolDescription:
      'Превуците углове изабраног подручја, нацртајте ново подручје или прилагодите вредности испод.',
    dragAndDrop: 'Превуците и испустите датотеку',
    dragAndDropHere: 'или превуците и испустите датотеку овде',
    editImage: 'Уреди слику',
    fileName: 'Име датотеке',
    fileSize: 'Величина датотеке',
    filesToUpload: 'Fajlovi za otpremanje',
    fileToUpload: 'Fajl za otpremanje',
    focalPoint: 'Централна тачка',
    focalPointDescription:
      'Превуците средишњу тачку директно на преглед или прилагодите вредности испод.',
    height: 'Висина',
    lessInfo: 'Мање информација',
    moreInfo: 'Више информација',
    pasteURL: 'Налепи URL',
    previewSizes: 'Величине прегледа',
    selectCollectionToBrowse: 'Одаберите колекцију за преглед',
    selectFile: 'Одаберите датотеку',
    setCropArea: 'Поставите подручје за исечену слику',
    setFocalPoint: 'Поставите централну тачку',
    sizes: 'Величине',
    sizesFor: 'Величине за {{label}}',
    width: 'Ширина',
  },
  validation: {
    emailAddress: 'Молимо Вас унесите валидну емаил адресу.',
    enterNumber: 'Молимо Вас унесите валидан број.',
    fieldHasNo: 'Ово поље нема {{label}}',
    greaterThanMax: '{{value}} прекорачује максималан дозвољени {{label}} лимит од {{max}}.',
    invalidInput: 'Ово поље садржи невалидан унос.',
    invalidSelection: 'Ово поље садржи невалидан одабир.',
    invalidSelections: 'Ово поље има следеће невалидне одабире:',
    lessThanMin: '{{value}} је испод дозвољеног минимума за {{label}} (доњи лимит је {{min}}).',
    limitReached: 'Досегнут је лимит, може се додати само {{max}} ставки.',
    longerThanMin: 'Ова вредност мора бити дужа од минималне дужине од {{минЛенгтх}} карактера',
    notValidDate: '"{{value}}" није валидан датум.',
    required: 'Ово поље је обавезно.',
    requiresAtLeast: 'Ово поље захтева минимално {{count}} {{label}}.',
    requiresNoMoreThan: 'Ово поље захтева не више од {{count}} {{label}}.',
    requiresTwoNumbers: 'Ово поље захтева два броја.',
    shorterThanMax: 'Ова вредност мора бити краћа од максималне дужине од {{maxLength}} карактера',
    trueOrFalse: 'Ово поље може бити само тачно или нетачно',
    username:
      'Molimo unesite važeće korisničko ime. Može sadržati slova, brojeve, crtice, tačke i donje crte.',
    validUploadID: 'Ово поље не садржи валидан ИД преноса.',
  },
  version: {
    type: 'Тип',
    aboutToPublishSelection: 'Управо ћете објавити све {{label}} у избору. Да ли сте сигурни?',
    aboutToRestore: 'Вратићете {{label}} документ у стање у којем је био {{versionDate}}',
    aboutToRestoreGlobal: 'Вратићете глобални {{label}} у стање у којем је био {{versionDate}}.',
    aboutToRevertToPublished: 'Вратићете промене у документу у објављено стање. Да ли сте сигурни?',
    aboutToUnpublish: 'Поништићете објаву овог документа. Да ли сте сигурни?',
    aboutToUnpublishSelection:
      'Управо ћете поништити објаву свих {{label}} у одабиру. Да ли сте сигурни?',
    autosave: 'Аутоматско чување',
    autosavedSuccessfully: 'Аутоматско чување успешно.',
    autosavedVersion: 'Верзија аутоматски сачуваног документа',
    changed: 'Промењено',
    compareVersion: 'Упореди верзију са:',
    confirmPublish: 'Потврди објаву',
    confirmRevertToSaved: 'Потврдите враћање на сачувано',
    confirmUnpublish: 'Потврдите поништавање објаве',
    confirmVersionRestoration: 'Потврдите враћање верзије',
    currentDocumentStatus: 'Тренутни {{docStatus}} документа',
    currentDraft: 'Trenutni nacrt',
    currentPublishedVersion: 'Trenutno Objavljena Verzija',
    draft: 'Нацрт',
    draftSavedSuccessfully: 'Нацрт успешно сачуван.',
    lastSavedAgo: 'Задњи пут сачувано пре {{distance}',
    noFurtherVersionsFound: 'Нису пронађене наредне верзије',
    noRowsFound: '{{label}} није пронађено',
    noRowsSelected: 'Nije odabrana {{label}}',
    preview: 'Преглед',
    previouslyPublished: 'Prethodno objavljeno',
    problemRestoringVersion: 'Настао је проблем при враћању ове верзије',
    publish: 'Објавити',
    publishChanges: 'Објави промене',
    published: 'Објављено',
    publishIn: 'Objavi na {{locale}}',
    publishing: 'Objavljivanje',
    restoreAsDraft: 'Vrati kao nacrt',
    restoredSuccessfully: 'Успешно враћено.',
    restoreThisVersion: 'Врати ову верзију',
    restoring: 'Враћање...',
    reverting: 'Враћање...',
    revertToPublished: 'Врати на објављено',
    saveDraft: 'Сачувај нацрт',
    selectLocales: 'Одаберите језике',
    selectVersionToCompare: 'Одаберите верзију за упоређивање',
    showingVersionsFor: 'Показујем верзије за:',
    showLocales: 'Прикажи језике:',
    status: 'Статус',
    unpublish: 'Поништи објаву',
    unpublishing: 'Поништавање објаве...',
    version: 'Верзија',
    versionCount_many: '{{count}} пронађених верзија',
    versionCount_none: 'Нема пронађених верзија',
    versionCount_one: '{{count}} пронађена верзија',
    versionCount_other: '{{count}} пронађених верзија',
    versionCreatedOn: '{{version}} креираних:',
    versionID: 'Идентификатор верзије',
    versions: 'Верзије',
    viewingVersion: 'Преглед верзије за {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Преглед верзије за глобални {{entityLabel}}',
    viewingVersions: 'Преглед верзија за {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Преглед верзије за глобални {{entityLabel}}',
  },
}

export const rs: Language = {
  dateFNSKey: 'en-US',
  translations: rsTranslations,
}
