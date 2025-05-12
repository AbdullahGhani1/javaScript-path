### Identity & Timing

| Property             | Definition                                                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **type**             | The event’s name (e.g. `"click"`, `"keydown"`), assigned when the event is created. ([MDN Web Docs][1])                                   |
| **timeStamp**        | A DOMHighResTimeStamp (in ms) indicating exactly when the event was created. ([MDN Web Docs][2])                                          |
| **defaultPrevented** | `true` if `preventDefault()` was called on this event, indicating its default action was canceled; otherwise `false`. ([MDN Web Docs][3]) |

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Event/type?utm_source=chatgpt.com "Event: type property - Web APIs - MDN Web Docs"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp?utm_source=chatgpt.com "Event: timeStamp property - Web APIs | MDN"
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented?utm_source=chatgpt.com "Event: defaultPrevented property - Web APIs - MDN Web Docs"

### Targeting & Propagation

| Property / Method              | Definition                                                                                                                                                              |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **target**                     | The original EventTarget (e.g. an Element) on which the event was dispatched. ([MDN Web Docs][1])                                                                       |
| **currentTarget**              | The EventTarget whose listener is currently handling the event (may differ from `target` during bubbling/capture). ([MDN Web Docs][2])                                  |
| **eventPhase**                 | An integer (`0`–`3`) indicating the phase: `NONE` (0), `CAPTURING_PHASE` (1), `AT_TARGET` (2), or `BUBBLING_PHASE` (3). ([MDN Web Docs][3])                             |
| **bubbles**                    | `true` if the event is configured to bubble upward through the DOM; otherwise `false`. ([MDN Web Docs][4])                                                              |
| **cancelable**                 | `true` if the event’s default action can be prevented via `preventDefault()`; otherwise `false`. ([GitHub][5])                                                          |
| **composedPath()**             | Returns an array of the objects on which event listeners will be invoked, from the root down to the target (excluding closed shadow‑DOM ancestors). ([MDN Web Docs][6]) |
| **stopPropagation()**          | Prevents further propagation of the event in the capturing and bubbling phases (does not cancel default behavior). ([MDN Web Docs][7])                                  |
| **stopImmediatePropagation()** | Prevents any remaining listeners on the same target from being called and stops further propagation. ([MDN Web Docs][8])                                                |
| **preventDefault()**           | Cancels the event’s default action (if `cancelable`), e.g. preventing a link navigation or form submission. ([MDN Web Docs][9])                                         |

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Event/target?utm_source=chatgpt.com "Event: target property - Web APIs - MDN Web Docs"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget?utm_source=chatgpt.com "Event: currentTarget property - Web APIs - MDN Web Docs"
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase?utm_source=chatgpt.com "Event: eventPhase property - Web APIs - MDN Web Docs"
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Event?utm_source=chatgpt.com "Event - Web APIs - MDN Web Docs - Mozilla"
[5]: https://github.com/mdn/content/blob/main/files/en-us/web/api/event/cancelable/index.md?plain=1&utm_source=chatgpt.com "content/files/en-us/web/api/event/cancelable/index.md at main"
[6]: https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath?utm_source=chatgpt.com "Event: composedPath() method - Web APIs - MDN Web Docs - Mozilla"
[7]: https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation?utm_source=chatgpt.com "Event: stopPropagation() method - Web APIs | MDN"
[8]: https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation?utm_source=chatgpt.com "Event: stopImmediatePropagation() method - Web APIs | MDN"
[9]: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault?utm_source=chatgpt.com "Event: preventDefault() method - Web APIs - MDN Web Docs"

### Mouse‑Specific & Related Targets

| Property          | Definition                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **clientX**       | Horizontal coordinate within the viewport (excluding scroll offset) where the event occurred. ([MDN Web Docs][1])                                      |
| **clientY**       | Vertical coordinate within the viewport (excluding scroll offset). ([MDN Web Docs][2])                                                                 |
| **screenX**       | Horizontal coordinate relative to the user’s physical screen. ([MDN Web Docs][3])                                                                      |
| **screenY**       | Vertical coordinate relative to the user’s physical screen. ([www-igm.univ-mlv.fr][4])                                                                 |
| **button**        | Which mouse button changed state (e.g. `0`=main/left, `1`=middle, `2`=secondary/right). ([MDN Web Docs][5])                                            |
| **buttons**       | Bitmask indicating which buttons are currently pressed (e.g. `1`=left, `2`=right, `4`=middle). ([MDN Web Docs][5])                                     |
| **relatedTarget** | The secondary EventTarget for mouse events—e.g. the element the pointer came from (on `mouseover`) or is going to (on `mouseout`). ([MDN Web Docs][6]) |
| **toElement**     | Non‑standard/IE‑only alias for `relatedTarget` on mouse‑exit events; indicates the element the pointer moved to. ([help.dottoro.com][7])               |
| **srcElement**    | Deprecated alias for `target` (IE‑legacy). Use `target` instead. ([MDN Web Docs][8])                                                                   |

[1]: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX?utm_source=chatgpt.com "MouseEvent: clientX property - Web APIs | MDN"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY?utm_source=chatgpt.com "MouseEvent: clientY property - Web APIs | MDN"
[3]: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenX?utm_source=chatgpt.com "MouseEvent: screenX property - Web APIs | MDN"
[4]: https://www-igm.univ-mlv.fr/~forax/MDN/developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenY.html?utm_source=chatgpt.com "MouseEvent.screenY property - IGM"
[5]: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent?utm_source=chatgpt.com "MouseEvent - Web APIs | MDN"
[6]: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/relatedTarget?utm_source=chatgpt.com "MouseEvent: relatedTarget property - Web APIs | MDN"
[7]: https://help.dottoro.com/ljltrsom.php?utm_source=chatgpt.com "toElement property (event) JavaScript - Dottoro Web Reference"
[8]: https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement?utm_source=chatgpt.com "Event: srcElement property - Web APIs - MDN Web Docs"

### Keyboard Modifier Flags

| Property     | Definition                                                                             |
| ------------ | -------------------------------------------------------------------------------------- |
| **altKey**   | `true` if the Alt (Option) key was pressed when the event fired. ([MDN Web Docs][1])   |
| **ctrlKey**  | `true` if the Control key was pressed. ([MDN Web Docs][1])                             |
| **shiftKey** | `true` if the Shift key was pressed. ([MDN Web Docs][2])                               |
| **metaKey**  | `true` if the Meta key (⌘ on Mac, Windows key on Win) was pressed. ([MDN Web Docs][3]) |

[1]: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent?utm_source=chatgpt.com "MouseEvent - Web APIs | MDN"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey?utm_source=chatgpt.com "KeyboardEvent: shiftKey property - Web APIs | MDN"
[3]: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey?utm_source=chatgpt.com "KeyboardEvent: metaKey property - Web APIs | MDN"
