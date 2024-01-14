
export const lib = [
{
  name: 'users-view',
  tagName: 'table',
  tmpl: '<table> <tr :for="0"> <td><avatar :src="1"></avatar></td> <td><email :addr="2"></email></td> <td><pretty-date :date="3"></pretty-date></td> </tr></table>',
  fns: [
    _ => ['user', _.users, '$index'],
    _ => _.user.avatar,
    _ => _.user.email,
    _ => _.user.created
  ]
},{
  name: 'feedback-view',
  tagName: 'table',
  tmpl: '<table> <tr :for="0"> <td><strong>:1:</strong></td> <td><email :addr="2"></email><q>:3:</q></td> <td><pretty-date :date="4"></pretty-date></td> </tr></table>',
  fns: [
    _ => ['user', _.users, '$index'],
    _ => [_.user.name],
    _ => _.user.email,
    _ => [_.user.feedback],
    _ => _.user.created
  ]
},{
  name: 'email',
  tagName: 'a',
  tmpl: '<a :href="0">:1:</a>',
  fns: [
    _ => ['mailto:',_.addr],
    _ => [_.addr]
  ]
},{
  name: 'avatar',
  tagName: 'img',
  tmpl: '<img :src="0">',
  fns: [
    _ => ['https://i.pravatar.cc/80?img=',_.src]
  ]
},{
  name: 'pretty-date',
  tagName: 'time',
  tmpl: '<time>:0:</time>',
  Impl: class { 
    format(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      })
    }
   },
  fns: [
    _ => [_.format(_.date)]
  ]
}]
export default lib[0]