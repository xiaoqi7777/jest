/* eslint-disable no-undef */
// 内部自带的
import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList'
import UndoList from '../../components/UndoList'

describe('todoList', () => {
  it(' 初始化 todoList为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it(' 监听到header的add事件时 addItem 的时候 会增加一个内容', () => {
    // 集成测试 两个组件的之间有关联
    // const wrapper = shallowMount(TodoList)
    // const header = wrapper.findComponent(Header)
    // header.vm.$emit('add', 'abc')
    // // wrapper.vm.addUndoItem('abc')
    // const undoList = wrapper.vm.$data.undoList
    // expect(undoList).toEqual(['abc'])

    // 单元测试 指对单个组件处理
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 },
      { status: 'div', value: 4 }
    ])
  })

  it(' 调用 UndoList 应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    // find  被findComponent 替代
    const undoList = wrapper.findComponent(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })
  // 监听delete事件 比较麻烦  暂时不写
  it(' handleDeleteItem方法被调用时,UndoList内容减少', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([1, 3])
  })

  it(' changeStatus 方法被调用时,UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.changeStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ])
  })

  it(' resetStatus 方法被调用时,UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.resetStatus()
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ])
  })

  it(' changeItemValue 方法被调用时,UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'input', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.changeItemValue({
      index: 1,
      value: '444'
    })
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: '444' },
      { status: 'div', value: 3 }
    ])
  })
})
