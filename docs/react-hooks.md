# useState Hook

## When to use?

- Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại dữ liệu).

## How to use?

```jsx
import { useState } from 'react'

function Component() {
    const [state, setState] = useState(initState)

    ...
}
```

## Notes

- Component được re-render sau khi `setState`.
- Inital State chỉ dùng cho lần đầu.
- Set State với callback?
- Inital State với callback?

### Two-way Binding

-

# useEffect Hook

> Mounted / Unmounted

## When to use?

- Update DOM

- Call API

- Listen DOM events

- Cleanup

## Cases

> useEffect(callback)

- Call callback whenever component re-renders.
- Call callback whenever component add elements to DOM.

> useEffect(callback, [])

- Only call callback whenever after component mounted.

> useEffect(callback, [deps])

## Notes

- Callback always be called after component mounted
- Cleanup function always be called before component unmount.
- Cleanup function always be called before callback was called (except the first time when component mounted)
