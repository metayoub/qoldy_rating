# Overview

Qodly Custom Component for rating

![image info](public/rating.png)

# Getting Started

## Properties:

| Prop | Type | Default | Description | Example |
| ---- | ---- | ------- | ----------- | ------- |
| Icon | icon | `star` | The icon used in the compoent. | `heart` |
| ReadOnly | boolean | false | Whether to render an accessible element or not. | true |
| Empty Color | string | `rgb(243, 243, 243)` | The color of the empty element. | `#767B87, rgb(203, 211, 227), black` |
| Full Color | string | `rgb(255, 215, 0)` | The color of the full element. | `#767B87, rgb(203, 211, 227), black` |
| Star | number | 0 | The min number. | 2 |
| Stop | number | 5 | The max number. | 10 |
| Step | number | 5 | The number of element to choose from or to display.  | 5 |
| Direct | string | `ltr` | Orientation of the rating items. | `ltr or rtl` |
| Half Fill Mode | boolean | false | Whether to half-fill the shape or the bounding box. | true |
