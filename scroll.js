        let class_list=[];
        let height_list=[];
        const windowHeight = window.innerHeight; //画面の高さを取得
        const aa=document.querySelectorAll('.fadein');

        console.log(windowHeight / 2);



        for(let i=0;i<aa.length;i++) {
            class_list.push(aa[i]);
            const bb=aa[i].getBoundingClientRect(); //TOPから要素までの高さ
            height_list.push(bb.top);//サイト上部からの距離と画面サイズを引いた値をトリガーとする
        }

        console.log(class_list[0].classList);

        window.addEventListener('scroll',()=> {
            // console.log(window.scrollY);　スクロール量

            for(let j=0;j<class_list.length;j++) {
                if(window.scrollY > 499) {
                    class_list[j].classList.add('display');
                } else {
                    class_list[j].classList.remove('display');
                }

                if(window.scrollY > 500) {
                    class_list[j].classList.add('on');
                } else {
                    class_list[j].classList.remove('on');
                }
            }
        },false)