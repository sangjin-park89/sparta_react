### 함수형 스테이트
- 함수형 스테이트 코드 저장용
- Nemo.js
    ```js
    import React from "react";

    const Nemo = (props) => {
        const [count, setCount] = React.useState(3);
        console.log(count);
        const nemo_count = Array.from({ length: count }, (v, i)=> i);

        const addNemo = () => {
            setCount(count + 1);
        }
        const removeNemo = () => {
            if(count > 0){
                setCount(count - 1);
            }else{
                window.alert("네모가 없어요")
            }
            
        }
        return (
            <>
                {nemo_count.map((n, i) => {
                return (
                <div 
                  key = {i}
                   style={{
                   width: "150px",
                   height: "150px",
                   backgroundColor : "#dddddd",
                   margin: "10px",
                   }}>
                   nemo
                </div>
                )

                })}

                <div>
                    <button onClick={addNemo}>하나 추가</button>
                    <button onClick={removeNemo}>하나 빼기</button>
                </div>
            </>
        );
    }

    export default Nemo;
    ```
- 네모 추가/제거 페이지 코드
- 참고
    <details>
    <summary>App.js 코드</summary>
    <div markdown="1">

    ```javascript
    import React from "react";
    import Nemo from "./Nemo";

    class App extends React.Component{
      constructor(props){
        super(props);

        this.state = {
          count: 3,
        };
      }

        render(){
              return (
            <div className="App">
              <Nemo />
            </div>
        )
      }
    }

    export default App;
    ```

    </div>
    </details>