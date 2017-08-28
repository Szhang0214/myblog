/**
 *封装获取文本的函数
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (element.innerText === undefined) {
        return element.textContent;
    } else {
        return element.innerText;
    }
}
/**
 * 封装设置文本的函数
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (element.innerText === undefined) {
        element.textContent = content;
    } else {
        element.innerText = content;
    }
}

/**
 * 封装获取下一个兄弟元素的函数
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && next.nodeType !== 1) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**
 * 封装获取上一个兄弟元素的函数
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var pre = element.previousSibling;
        while (pre && pre.nodeType !== 1) {
            pre = pre.previousSibling;
        }
        return pre;
    }
}

/**
 * 封装获取获取第一个子元素的函数
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var firstNode = element.firstChild;
        while (firstNode && firstNode.nodeType !== 1) {
            firstNode = firstNode.firstChild;
        }
        return firstNode;
    }
}

/**
 * 封装获取获取最后一个子元素的函数
 * @param element
 * @returns {*}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var lastNode = element.lastChild;
        while (lastNode && lastNode.nodeType !== 1) {
            lastNode = lastNode.lastChild;
        }
        return lastNode;
    }
}
/**
 * 封装获取任意对象的任意属性
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
/**
 * 封装获取页面滚动坐标的函数
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {
    return {
        top: window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
/**
 * 封装获取可视区域宽高的函数
 * @returns {{width: (Number|number), height: (Number|number)}}
 */
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    }
}
