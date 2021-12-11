//배열에 기록들 가져오는 코드========================
        //        index에서 저장했던 기록들을 가져온다
        var arr = JSON.parse(sessionStorage.getItem("key"));
        var 좌표 = JSON.parse(sessionStorage.getItem("location_arr"));
        //=================================================
        
        //=====이름을 대면 좌표인덱스를 가져오는 함수=====
        function search_index(str) {
            for(var j = 0; j < 좌표.length; j++){
                if(str == 좌표[j][2]){return j;}
            }
            return console.log("존재하지 않는 좌표입니다");
        }


        //arr 세션스토리지에 업데이트
          var transportation;
          var timer;

        function saver(str) {
            transportation = str;
          }

        function timer(str) {
            timer = str;
        }

        function store(input) {
            if (!window.sessionStorage) {
                alert("세션 스토리지를 지원하지 않습니다.");
                return;
            }
            arr.push([input, transportation, timer]);
            //arr.push("출발지점");
            sessionStorage.setItem("key", JSON.stringify(arr));

            //다음 페이지로 넘겨주는 코드
            location.href = input + ".html";
        }