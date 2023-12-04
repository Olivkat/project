             val_a = document.getElementById("a");
                res = document.getElementById("result");
                val_a.addEventListener("change", func_a);
                function func_a() {
                    console.log(val_a.value);
                    q = parseInt(val_a.value);
                    console.log(q);
                    c = ((q-7000)/7000)*100;
                    str = "При доході " + q + " грн показник ROI дорівнює " + c + " %";
                    res.innerHTML = str;
                    if ((c - 211) == 0) {
                        str += " - Ви обрали правильний варіант!";
                        res.className = "correct";
                    } else {
                        str += " - Ви обрали неправильний варіант!";
                        res.className = "incorrect";
                    }
                    res.innerHTML = str;
}
                val_b = document.getElementById("b");
                res1 = document.getElementById("result1");
                val_b.addEventListener("change", func_b);
                function func_b() {
                    console.log(val_b.value);
                    q = parseInt(val_b.value);
                    console.log(q);
                    c = ((81000-q)/q)*100;
                    str = "При D = 81000 грн та C = " + q + " грн показник ROI дорівнює " + c + " %";
                    res1.innerHTML = str;
                    if ((c - 350) == 0) {
                        str += " - Ви обрали правильний варіант!";
                        res1.className = "correct";
                    } else {
                        str += " - Ви обрали неправильний варіант!";
                        res1.className = "incorrect";
                    }

                    res1.innerHTML = str;
                }
          
                val_c = document.getElementById("c");
                res2 = document.getElementById("result2");
                val_c.addEventListener("change", func_c);
                function func_c() {
                    console.log(val_c.value);
                    q = parseInt(val_c.value);
                    console.log(q);
                    c = ((q-12000)/12000)*100;
                    str = "При доході " + q + " грн показник ROI дорівнює " + c + " %";
                    res2.innerHTML = str;
                    if ((c - 150) == 0) {
                        str += " - Ви обрали правильний варіант!";
                        res2.className = "correct";
                    } else {
                        str += " - Ви обрали неправильний варіант!";
                        res2.className = "incorrect";
                    }
                    res2.innerHTML = str;
}
val_d = document.getElementById("d");
                res3 = document.getElementById("result3");
                val_d.addEventListener("change", func_d);
                function func_d() {
                    console.log(val_d.value);
                    q = parseInt(val_d.value);
                    console.log(q);
                    c = ((q*500-20000)/20000)*100;
                    str = "При кількості студентів " + q + " дохід дорівнює "+ q*500 + ", a показник ROI дорівнює " + c + " %";
                    res3.innerHTML = str;
                    if ((c - 200) == 0) {
                        str += " - Ви обрали правильний варіант!";
                        res3.className = "correct";
                    } else {
                        str += " - Ви обрали неправильний варіант!";
                        res3.className = "incorrect";
                    }

                    res3.innerHTML = str;
}
val_e = document.getElementById("e");
                res4 = document.getElementById("result4");
                val_e.addEventListener("change", func_e);
                function func_e() {
                    console.log(val_e.value);
                    q = parseInt(val_e.value);
                    console.log(q);
                    c = ((q*30-25000)/25000)*100;
                    str = "При кількості учасників " + q + " дохід дорівнює "+ q*30 + ", a показник ROI дорівнює " + c + " %";
                    res4.innerHTML = str;
                    if ((c - 500) == 0) {
                        str += " - Ви обрали правильний варіант!";
                        res4.className = "correct";
                    } else {
                        str += " - Ви обрали неправильний варіант!";
                        res4.className = "incorrect";
                    }
                    res4.innerHTML = str;
}