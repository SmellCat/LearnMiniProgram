Page({
  data: {
    name: 'Atituiset',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 110, name: 'james', age: 30},
      {id: 110, name: 'kuli', age: 30}
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误的做法，界面不会刷新
    // this.data.counter += 1

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})