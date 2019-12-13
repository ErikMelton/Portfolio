exports.onCreatePage = ({ page, actions }) => {
  return new Promise((resolve) => {
    if (page.path === '/home/') {
      actions.deletePage(page)
      actions.createPage({ ...page, path: '/' })
    }
    resolve()
  })
}