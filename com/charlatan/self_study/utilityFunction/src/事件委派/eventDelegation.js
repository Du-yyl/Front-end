/**
 * Time:2022/4/19 18:52 16
 * Name:eventDelegation.js
 * Path:src/事件委派
 * ProjectName:utilityFunction
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

/**
 * 事件委派
 * @param element 要绑定的元素
 * @param event 要绑定的触发事件
 * @param callback 要绑定的回调
 * @param triggerEle 要触发的子元素
 */
function eventDelegation (element, event, callback, triggerEle) {
  
  let elementType = Object.prototype.toString.call(element).slice(8, -1)
  let eventType = Object.prototype.toString.call(event).slice(8, -1)
  let callbackType = Object.prototype.toString.call(callback).slice(8, -1)
  let triggerEleType = Object.prototype.toString.call(triggerEle).slice(8, -1)
  
  // 判断要绑定的元素是否正确
  if (!/^\bHTML+[\w]*/.test(elementType)) {
    if (elementType === 'String') {
      if (/^[.]/.test(element)) element = document.querySelector(element)
      else if (/^[#]/.test(element)) element = document.getElementById(element)
    } else
      throw new Error('要绑定元素格式错误，只能是获取后的元素，或指定的ID或Class')
  }
  
  // 判断绑定事件类型
  if (eventType !== 'String')
    throw new Error('绑定事件错误，必须是字符串类型')
  
  // 判断绑定事件类型
  if (callbackType !== 'Function')
    throw new Error('要绑定的事件不是函数类型')
  
  // 判断要触发的子元素类型
  if (triggerEleType === 'Undefined') {
    element.addEventListener(event, callback, false)
  } else if (!/^\bHTML+[\w]*/.test(triggerEleType)) {
    if (triggerEleType === 'String') {
      
      // 获取元素
      if (/^[.]/.test(triggerEle)) triggerEle = document.querySelector(triggerEle)
      else if (/^[#]/.test(triggerEle)) triggerEle = document.getElementById(triggerEle)
      
      element.addEventListener(event, function (event) {
        if (event.target.matches(triggerEle.nodeName))
          callback.call(event.target, event)
      }, false)
    } else
      throw new Error('要绑定的子元素，只能是获取后的元素，或字符串')
  }
}
