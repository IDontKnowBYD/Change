import React from 'react'
import { connect } from 'react-redux'
import { setVisibility } from '../actions'

// 导入组件
import FooterLink from './FooterLink'

const Footer = ({ onFilter, filter }) => {
  console.log('Footer:', filter)
  return (
    <p>
      Show:{' '}
      <FooterLink
        active={filter === 'SHOW_ALL'}
        onFilter={() => onFilter('SHOW_ALL')}
      >
        All
      </FooterLink>{' '}
      <FooterLink
        active={filter === 'SHOW_ACTIVE'}
        onFilter={() => onFilter('SHOW_ACTIVE')}
      >
        Active
      </FooterLink>{' '}
      <FooterLink
        active={filter === 'SHOW_COMPLETED'}
        onFilter={() => onFilter('SHOW_COMPLETED')}
      >
        Completed
      </FooterLink>
    </p>
  )
}

const mapStateToProps = state => {
  return {
    filter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilter(filter) {
      dispatch(setVisibility(filter))
    }
  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
