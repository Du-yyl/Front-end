/**
 * Date:2021/12/7 18:16 00
 * Name:类的增加&删除&动态增删.js
 * Path:
 * ProjectName:WWW
 * Author:charlatan
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */


/**
 * 对类的添加、删除、现有类的判断
 */
/**
 * 判断指定的ID中是否含有指定的class，如果有则进行删除，若没有则添加；
 * 通过class的更改完成指定元素的样式变换
 * @param variablesObtainedThroughID  获取到的指定元素的ID
 * @param theClassToBeModified  要移动的新的class
 * @param {HTMLElement} variablesObtainedThroughID
 * @param {string} theClassToBeModified
 */
const dynamicAdjustmentOfClasses = (variablesObtainedThroughID, theClassToBeModified) => {
    let exg = new RegExp('\\b ' + theClassToBeModified + '\\b')
    if (!exg.test(variablesObtainedThroughID.className)) {
        variablesObtainedThroughID.className += " " + theClassToBeModified
    } else {
        variablesObtainedThroughID.className = variablesObtainedThroughID.className.replace(exg, "")
    }
};


/**
 * 在指定的ID的元素中添加新的class
 * @param iDToBeModified 获取的指定元素的ID
 * @param theClassToBeAdded 要添加的class
 */
const addClass = (iDToBeModified, theClassToBeAdded) => {
    iDToBeModified.className += " " + theClassToBeAdded
};


/**
 * 判断指定ID的元素中是否含有指定的class
 * @param iDToBeModified 指定的元素的ID
 * @param theClassToDelete 要进行判断的class
 * @returns {boolean} 如果有返回的是true，反之返回false
 */
const hasClass = (iDToBeModified, theClassToDelete) => {
    let exg = new RegExp('\\b ' + theClassToDelete + '\\b')
    return exg.test(iDToBeModified.className);
};


/**
 * 将指定的class从指定的ID的元素中移除
 * @param iDToBeModified 指定要移动的元素的ID
 * @param theClassToDelete 要进行删除的class
 */
const removeClass = (iDToBeModified, theClassToDelete) => {
    let exg = new RegExp('\\b ' + theClassToDelete + '\\b')
    iDToBeModified.className = iDToBeModified.className.replace(exg, "")
};
