
  // import application router
  import { router } from '/@nue/app-router.js'

  // import business model (the JS heavy, non-UI functionality)
  import model from './model/index.js'

export const lib = [
{
  name: 'app',
  tagName: 'main',
  tmpl: '<main> <header> <h1>:0:</h1> <p>:1:</p> </header> <nav> <a href="/">Users</a> <a href="/feedback">Feedback</a> <a href="/analytics">Analytics</a> </nav> <article id="container"></article> </main>',
  Impl: class { 

    // after #container is mounted
    mounted() {

      // front page -> show users
      router.on('/', async() => {
        const users = await model.getUsers()
        this.mountChild('users-view', container, { users })
      })

      // feedback page -> show feedback
      router.on('/feedback', async() => {
        const users = await model.getFeedback()
        this.mountChild('feedback-view', container, { users })
      })

      // analytics page -> show analytics
      router.on('/analytics', async() => {
        const data = await model.getAnalytics()
        this.mountChild('analytics-view', container, data)
      })

      // start routing & setup <nav> onclick handlers
      router.start(this)
    }
   },
  fns: [
    _ => [_.title],
    _ => [_.description]
  ]
}]
export default lib[0]