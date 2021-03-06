/**
 * @component ChooseCity
 * @description
 *
 * ## 全国城市选择器 / ChooseCity组件
 *
 * ### 简述
 *
 * 选择城市的组件，如果开启定位则可定位当前的城市，这个组件只选择城市，如果需要三级城市联动的话，请参考`city-picker`组件。
 *
 * ### 来源
 *
 * 因为这个组件在Alipay和天猫淘宝都出现过，因此，对于 ```ALipay``` 将调用原生组件，如果是在其余平台将调用H5组件，且传参功能点完全相同。因此, 如果是在支付宝模式, 且设置了Bridge, 则自动开自支付宝的UI控件, 具体参考Demo.
 *
 * @demo #/choose-city
 *
 * @usage
 * import { ChooseCity } from 'vimo'
 *
 * function openCitySelector () {
 *    let _this = this
 *    ChooseCity.present({
 *      showLocatedCity: true,
 *      onDismiss (data) {
 *        console.log(data)
 *      }
 *    })
 *  }
 */
/**
 * @function present
 * @description
 * 开启ChooseCity组件
 * @param {Boolean}   options - 传入参数
 * @param {Boolean}   [options.showLocatedCity=false]   - 是否显示当前定位城市，默认 false
 * @param {Boolean}   [options.showHotCities=true]      - 是否显示热门城市，默认 true
 * @param {Array}     [options.cities]                  - 城市数据，默认 本地数据
 * @param {Array}     [options.cities.city]             - 城市名称
 * @param {Array}     [options.cities.adCode]           - 城市编码
 * @param {Array}     [options.cities.spell]            - 城市拼音
 * @param {Array}     [options.hotCities]               - 热门城市，默认 本地数据
 * @param {Array}     [options.hotCities.city]          - 城市名称
 * @param {Array}     [options.hotCities.adCode]        - 城市编码
 * @param {Array}     [options.hotCities.spell]         - 城市拼音
 * @param {Boolean}   [options.isH5=false']             - 是否强制使用H5模式，默认是自动的
 * @param {String}    [options.ak='8d1b...90a2']- 如果是H5模式并且开启了'当前定位城市'，则使用高德地图定位，这个是AK
 * @param {Function}  [options.onDismiss]               - 当选择点击后的回调，传入参数是当前选择的城市
 * */
import ChooseCityComponent from './choose-city.vue'
import GeneratePopUpInstance from '../../util/GeneratePopUpInstance.js'

class ChooseCityInstance extends GeneratePopUpInstance {
  normalizeOptions (options) {
    // 进行历史记录
    options.recordInHistory = true
    return options
  }

  isPresentHandled (options) {
    return !options.isH5 &&
      window.VM &&
      window.VM.platform &&
      window.VM.platform.chooseCity &&
      window.VM.platform.chooseCity(options)
  }
}

export default new ChooseCityInstance(ChooseCityComponent, 'modalPortal')
