/* 
  容器组件：
    组件自身要实现 高亮/单击切换显示不同状态任务 功能
*/

import { connect } from 'react-redux'
import { setVisibility } from '../actions'

// 导入 Link 展示组件
import Link from '../components/Link'

// 说明： 第二个参数 ownProps 表示：该组件（FooterLink）组件自身的属性
//        也就是说：在使用FooterLink组件时给该组件传递的属性
//        比如: <FooterLink filter="SHOW_ALL">All</FooterLink> 中的 filter 属性
// 说明： 该方法不一定要将 redux 中的state传递给组件，应该给组件传递其需要的数据就可以了
const mapStateToProps = (state, ownProps) => {
  // console.log('ownProps ->', ownProps)

  return {
    active: state.visibilityFilter === ownProps.filter
  }
}

// 说明： 第二个参数 ownProps 也是该组件（FooterLink）自身的属性
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFilter() {
      // dispatch(setVisibility('SHOW_ALL'))
      dispatch(setVisibility(ownProps.filter))
    }
  }
}

const FooterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FooterLinkContainer
