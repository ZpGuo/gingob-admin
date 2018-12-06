export default {
  common: {
    search: '搜索',
    add: '添加',
    addNow: '立即添加',
    delete: '删除',
    restore: '恢复',
    remove: '移除',
    edit: '编辑',
    change: '修改',
    create: '创建',
    DESC: '按降序排列',
    ASC: '按升序排列',
    ID: '序号',
    error: '异常',
    cancel: '取消',
    confirm: '确定',
    tips: '提示',
    reset: '重置',
    clear: '清空',
    save: '保存',
    success: '成功',
    failed: '失败',
    action: '操作',
    operationFailed: '操作失败！',
    operationSucceeded: '操作成功！',
    deleteSucceeded: '删除成功！',
    removeSucceeded: '移除成功！',
    cancelDelete: '已取消删除',
    cancelRemove: '已取消移除',
    updateSucceeded: '更新成功！',
    updateFailed: '更新失败！',
    createSucceeded: '创建成功！',
    createFailed: '创建失败！',
    needRequiredParams: '缺少必填参数'
  },
  route: {
    dashboard: '首页',
    article: '文章',
    articleList: '文章列表',
    articleAdd: '创建文章',
    articleEdit: '编辑文章',
    category: '分类目录',
    tags: '标签',
    subject: '专题',
    subjectManager: '专题管理',
    subjectAdd: '添加专题',
    media: '媒体',
    mediaManager: '媒体库',
    mediaAdd: '新增媒体',
    link: '链接',
    linkList: '全部链接',
    linkAdd: '添加链接',
    linkCategory: '链接分类目录',
    page: '页面',
    pageList: '所有页面',
    pageAdd: '添加页面',
    comment: '评论',
    commentList: '评论列表',
    user: '用户',
    userList: '所有用户',
    info: '用户详情',
    myProfile: '我的个人资料',
    setting: '设置',
    siteSetting: '网站配置',
    siteSettingGeneral: '常规',
    siteSettingProperty: '属性',
    contentSetting: '内容配置',
    contentSettingWritting: '撰写',
    contentSettingReading: '阅读',
    contentSettingMedia: '媒体',
    contentSettingDiscuss: '讨论',
    otherSetting: '其它',
    otherSettingGithub: 'Github',
    otherSettingGeneralAccount: '公众号'
  },
  dashboard: {
    totalVisit: '总访问',
    totalComments: '评论数',
    totalArticles: '文章数',
    totalMedia: '媒体数'
  },
  post: {
    author: '作者',
    title: '标题',
    date: '发布时间',
    views: '阅读量',
    comments: '评论数',
    status: '状态',
    action: '操作',
    publish: '已发布',
    draft: '草稿',
    deleted: '已删除',
    checkToTrashArticle: '确定是否删除文章？删除后仍可恢复。',
    checkToDeleteArticle: '此操作将把文章移除, 文章的各种关联关系也将彻底移除且不可逆，是否继续？',
    restoreArticleSucceeded: '文章已恢复为草稿。'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    screenfull: '全屏',
    theme: '换肤'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    wellcomeLogin: '您好，欢迎登录',
    pleaseEnterUsername: '请输入用户名',
    passwordValidate: '密码不能小于5位',
    usernameValidate: '请输入正确格式的用户名；包含字母数字下划线，3到16位'
  },
  permission: {
    roles: '你的权限'
  },
  tagsView: {
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  user: {
    account: '账号',
    username: '用户名',
    nickname: '昵称',
    email: '邮箱',
    registeredTime: '注册时间',
    status: '状态',
    normal: '正常',
    freezing: '冻结',
    defreeze: '解除冻结',
    role: '角色',
    administrator: '管理员',
    writer: '创作者',
    subscriber: '订阅者',
    selectRole: '请选择用户角色',
    password: '密码',
    passwordAgain: '确认密码',
    website: '站点',
    createNow: '立即创建',
    pleaseInputPassWord: '请输入密码',
    pleaseInputPassWordAgain: '请再次输入密码',
    checkPasswordFailed: '两次输入密码不一致!',
    pleaseInputAccount: '请输入登录账号',
    pleaseCheckAcountLength: '账号长度不能小于 3 个字符',
    pleaseInputEmail: '请输入邮箱地址',
    pleaseInputCorrectEmail: '请输入正确的邮箱地址',
    pleaseSelectRoles: '请选择用户角色',
    pleaseCheckPasswordLength: '密码长度不能小于 5 个字符',
    checkToDeleteUser: '此操作将把用户移至回收站, 是否继续？',
    uploadSucceeded: '上传成功',
    uploadFailed: '上传失败',
    cropSuccess: '裁剪成功'
  },
  media: {
    mediaTitle: '标题',
    mediaSlug: '缩略名',
    mediaUrl: '链接',
    mediaDescription: '描述',
    mediaUploadTime: '上传时间',
    unknowType: '未知类型',
    picture: '图片',
    fileName: '文件名',
    uploadSucceeded: '上传成功',
    uploadFailed: '上传失败',
    checkToDeleteMedia: '确定删除文件吗？已上传文件将被移到回收站。',
    getDetailFailed: '获取详情失败',
    titleEmpty: '标题不能为空',
    pleaseInputDesc: '请输入描述',
    copyTo: '复制到粘贴板',
    copySuccessed: '已复制到粘贴板'
  },
  taxonomy: {
    category: '分类',
    newCategory: '添加新分类',
    taxonomyName: '名称',
    taxonomySlug: '缩略名',
    categoryParent: '父级分类',
    taxonomyDesc: '描述',
    categoryNoParents: '无父级',
    categoryDetail: '分类详情',
    articleNumber: '文章数量',
    parentCannotBeSelf: '父级分类不能是自己',
    confirmToDeleteCategory: '是否直接删除分类？该操作将直接删除分类且不会将分类移到回收站，操作不可逆，确定要删除吗？',
    tag: '标签',
    newTag: '添加新标签',
    tagDetail: '标签详情',
    confirmToDeleteTag: '是否直接删除标签？该操作将直接删除标签且不会将标签移到回收站，操作不可逆，确定要删除吗？'
  }
}
