
# CSS 정리

- [Selector](#selector)
- [Display](#display)
- [position](#position)
- [Float&Clear](#float&clear)
- Table
- Transition
- Animation
- [Flex Box](#flex-box)
- Grid

## [Selector](main/1_selector/selector.html)
구분 | 설명 
---|:---:
`전체 선택자` | HTML문서에 있는 모든 요소 선택| 
`태그 선택자` | HTML 태그를 선택| 
`id 선택자`    | 특정 요소(단일)를 선택| 
`class 선택자`| 특정 입단의 여러 요소(다중)를 선택 | 
`후손 선택자` | 해당 요소의 __모든 하위 요소__ 중에서 특정 타입의 요소를 모두 선택| 
`자손 선택자` | 해당 요소의 __바로 밑에 존재하는 하위 요소__ 중 특정 타입의 요소를 모두 선택| 
`그룹 선택자` | 여러 선택자를 같이 사용하여 선택 | 
`속성 선택자` | 특정 속성을 갖고 있거나 특정 속성값 등 갖고 있는 요소를 선택| 
`동위 선택자` | 동위 관계 요소 중 해당 요소보다 뒤에 존재하는 요소 선택| 
`구조 선택자` | 특정 위치의 요소 선택 | 
`반응 선택자` | 사용자의 움직임에 따라 선택| 
`상태 선택자` | 입력양식의 상태에 따라 선택 | 
`링크 선택자` | 링크 속성을 가지고 있는 __a태그__ 에 적용되는 선택자| 
`문자 선택자` | 요소 내부의 특정 조건의 문자를 선택 | 
`부정 선택자` | 이전 선택자와 __반대로__ 적용하여 선택 | 

적용 우선순위
태그 스타일 => class 스타일 => id 스타일 => 인라인 스타일 => !important

## [Display](main/2_display/display.html)
HTML 요소가 페이지에서 어떻게 보여질지 지정하는 속성
속성값 | 설명 
---|:---:
`block` |요소를 block형태로 지정함. 해당 요소는 해당 라인의 모든 너비를 차지함. |
`inline` |요소를 inline형태로 지정함. 해당 요소는 콘텐츠만큼의 너비와 높이만을 가짐.  |
`inline-block` |요소를 inline-block형태로 지정함.형태는 inline이지만, display처럼 속성부여가 가능  |
`none` |요소를 none으로 지정함.페이지 내에서 보이지 않도록 지정 |

## [Position](main/3_position/position.html)
HTML 요소가 페이지에서 보여질 위치를 지정하는 속성
속성값 | 설명
---|:---:
`static` |정적 위치 지정방식. postion 속성의 기본 설정값.|
`relative` |상대 위치 지정방식. |
`fixed` |고정 위치 지정방식.|
`absolute` |절대 위치 지정방식.|
`sticky` |사용자의 스크롤 위치를 기준으로 지정.|

## [Float&clear](main/4_float/float.html)

Float
HTML 요소가 일반적인 흐름에서 벗어나 떠있게 보여지도록 하는 속성
속성값 | 설명
---|:---:
`left`|HTML 요소를 왼쪽에 부유하도록 지정|
`right`|HTML 요소를 오른쪽에 부유하도록 지정|
`none`|기본값. 요소를 부유하도록 하지 않음|

clear
속성값 | 설명
---|:---:
`left`||
`right`||
`none`||
`both`||

## Flex box
속성 | 설명 
---|:---:
`display`        | HTML 요소에 대한 박스타입을 명시 | 
`flex-direction` | 플렉스 컨테이너 안의 플렉스 아이템이 위치할 방향 설정 |

