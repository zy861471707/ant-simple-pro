import {
  ColumnHeightOutlined
} from '@ant-design/icons-vue'

export default {
  name: 'TableSize',
  props: {
    onChange: {
      type: Function,
      default: () => {} // eslint-disable-line
    }
  },
  render() {
    const menu = (
      <a-menu onClick={this.onChange} selectable defaultSelectedKeys={['middle']}>
        <a-menu-item key="middle">默认</a-menu-item>
        <a-menu-item key="large">松散</a-menu-item>
        <a-menu-item key="small">紧凑</a-menu-item>
      </a-menu>
    )
    return (
      <a-tooltip title="密度" placement="left">
        <a-dropdown overlay={menu} placement="bottomCenter">
          <ColumnHeightOutlined />
        </a-dropdown>
      </a-tooltip>
    )
  }
}
