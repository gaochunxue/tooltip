<template>
  <div class="home">
    <div class="item">
      <div class="tooltip">
        常用tooltip-左侧
        <span class="tooltiptext right">普通tooltip</span>
      </div>
    </div>
    <div class="item">
      <div class="tooltip">
        常用tooltip-上侧
        <span class="tooltiptext bottom">普通tooltip</span>
      </div>
    </div>
    <div class="item">
      <div class="tooltip">
        常用tooltip-下侧
        <span class="tooltiptext top">普通tooltip</span>
      </div>
    </div>
    <div class="item">
      <div class="tooltip">
        常用tooltip-右侧
        <span class="tooltiptext left">普通tooltip</span>
      </div>
    </div>
    <div class="item">
      <div class="tooltip">
        echarts tooltip
        <div class="tooltiptext echarts">
          echarts tooltip
          <div class="red"><span></span>112</div>
          <div class="blue"><span></span>224</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'tooltip',
  pageName: 'home',
  data () {
    return {
    }
  },
  activated () {
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.home {
  height: 100%
  width: 100%
  padding: px(40)
  text-align: center
  .item {
    margin-bottom: px(12)
    .tooltip {
      position: relative
      display: inline-block
      margin-bottom: px(100)
      .tooltiptext {
        visibility: hidden
        width: px(240)
        background-color: rgba(0, 0, 0, .8)
        color: #fff
        text-align: center
        border-radius: px(6)
        padding: px(10) 0
        position: absolute
        z-index: 1
        &.bottom {
          position: absolute
          left: px(-40)
          bottom: px(40)
          &:after {
            border-left: px(12) solid transparent
            border-right: px(12) solid transparent
            border-top: px(12) solid rgba(0, 0, 0, .8)
            content: ''
            left: 45%
            bottom: px(-12)
            position: absolute
          }
        }
        &.top {
          position: absolute
          left: px(-40)
          top: px(40)
          &:after {
            border-left: px(12) solid transparent
            border-right: px(12) solid transparent
            border-bottom: px(12) solid rgba(0, 0, 0, .8)
            top: px(-12)
            content: ''
            left: 45%
            position: absolute
          }
        }
        &.left {
          position: absolute
          left: px(170)
          top: px(-8)
          &:after {
            border-top: px(12) solid transparent
            border-bottom: px(12) solid transparent
            border-right: px(12) solid rgba(0, 0, 0, .8)
            content: ''
            left: px(-12)
            position: absolute
          }
        }
        &.right {
          position: absolute
          left: px(-260)
          top: px(-8)
          &:after {
            border-top: px(12) solid transparent
            border-bottom: px(12) solid transparent
            border-left: px(12) solid rgba(0, 0, 0, .8)
            top: px(12)
            content: ''
            right: px(-12)
            position: absolute
          }
        }
        &.echarts {
          width: px(140)
          background-color: rgba(0, 0, 0, .4)
          text-align: left
          padding: 0 px(20)
          span {
            display: inline-block
            width: px(10)
            height: px(10)
            border-radius: 50%
            margin-right: px(6)
          }
          .red {
            line-height: 1.5
            span {
              background-color: red
            }
          }
          .blue {
            span {
              background-color: blue
            }
          }
        }
      }
    }
    .tooltip:hover .tooltiptext {
      visibility: visible
    }
  }
}
</style>
