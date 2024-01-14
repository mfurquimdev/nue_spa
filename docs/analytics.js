
export const lib = [
{
  name: 'analytics-view',
  tagName: 'section',
  tmpl: '<section> <h2>Monthly visitors</h2> <bar-chart :data="0" class="main chart"></bar-chart> <h2>Monthly new leads</h2> <bar-chart :data="1" class="secondary chart"></bar-chart> <h2>Monthly active users</h2> <bar-chart :data="2" class="secondary chart"></bar-chart></section>',
  fns: [
    _ => _.visitors,
    _ => _.leads,
    _ => _.users
  ]
},{
  name: 'bar-chart',
  tagName: 'figure',
  tmpl: '<figure> <div :for="0"> <b>:1:</b> <div class="bar" :style="2"></div> </div> </figure>',
  Impl: class { 
    format(am) {
      return am > 1000 ? Math.round(am / 100) / 10 + 'k' : am
    }

    constructor({ data }) {
      const max = Math.max(...data)

      this.items = data.map(amount => {
        const ratio = amount/max
        return { ratio, amount }
      })
    }
   },
  fns: [
    _ => ['el', _.items, '$index'],
    _ => [_.format(_.el.amount)],
    _ => ['flex: ',_.el.ratio]
  ]
}]
export default lib[0]