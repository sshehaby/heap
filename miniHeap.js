﻿var Node=function(t,e){this.leftNode=null,this.rightNode=null,this.index=0,this.data=e,this.depth=0,this.x=0,this.y=0,this.r=0,this.ctx=t,Node.prototype.toString=function(){return"[Node:"+this.data.toString()+" "+this.index+" "+this.getParent(this.index)+" "+this.x+" "+this.y+"]"},this.draw=function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.stroke(),this.ctx.closePath(),writeTextAt(t,this.data,this.x,this.y+this.r)},this.getData=function(){return this.data},this.getX=function(){return this.x},this.getY=function(){return this.y},this.getRadius=function(){return this.r},this.getParent=function(){return parseInt((this.index-1)/2)}},Line=function(){this.draw=function(t,e,n,a,r,i){var h=t,s=e+r,o=n,d=a-r;i.beginPath(),i.moveTo(h,s),i.lineTo(o,d),i.stroke()}};class BHeap{constructor(t=null){this.heap=[],this.context=t}insertHeap(t){var e=this.heap.length;this.heap.length=e+1,e++;var n,a=new Node(this.context,t);if(this.heap[e-1]=a,e>1){for(n=e-1;this.heap[parseInt((n-1)/2)].data>t&&n>0;n=parseInt((n-1)/2))this.heap[n]=this.heap[parseInt((n-1)/2)];this.heap[n]=a}}adjust(){var t;for(t=0;t<this.heap.length;t++)this.heap[t].index=t;if(this.heap&&this.heap.length){var e=this.heap.length;for(this.heap[0].depth=0,t=1;t<e;t++){if(!(t>=e)){var n=this.heap[t],a=this.heap[n.getParent(t)];n.depth=a.depth+1}}}}computeGeometry(t,e,n){if(this.adjust(),this.heap&&this.heap.length){var a,r=this.heap.length,i=this.heap[0];for(i.x=t,i.y=e,i.r=n,a=1;a<r;a++){if(!(a>=r)){var h=this.heap[a],s=this.heap[h.getParent(a)];if(a%2){var o=leftCoordinate(s.x,s.y,s.r,h.depth);h.x=o.cx,h.y=o.cy,h.r=n}else{o=rightCoordinate(s.x,s.y,s.r,h.depth);h.x=o.cx,h.y=o.cy,h.r=n}}}}}drawAll(t){if(this.heap&&t<this.heap.length){var e=this.heap[t];if(e.draw(),t){var n=new Line,a=this.heap[e.getParent(i)];n.draw(a.getX(),a.getY(),e.x,e.y,e.getRadius(),e.ctx)}this.drawAll(t+1)}}pop(){var t,e,n=this.heap.length,a=this.heap[n-1],r=this.heap[0].data;for(t=0;2*t+1<=n-1&&((e=2*t+1)<n-1&&this.heap[e+1].data<this.heap[e].data&&e++,a.data>this.heap[e].data);t=e)this.heap[t]=this.heap[e];return this.heap[t]=a,this.heap.length=n-1,this.adjust(),r}dispArrCanv(t,e,n,a,r=!1){var i,h=[];for(h.length=this.heap.length,i=0;i<this.heap.length;i++)h[i]=this.heap[i].data;drawArray(this.context,h,t,e,n,a,r)}}var leftCoordinate=function(t,e,n,a){return delta=Math.pow(2,8-a),{cx:t-delta,cy:e+3*n}},rightCoordinate=function(t,e,n,a){return delta=Math.pow(2,8-a),{cx:t+delta,cy:e+3*n}},computeGeometry=function(t,e,a,r){var i;for(i=0;i<t.length;i++)t[i].index=i;if(t&&t.length)for(n=t.length,node=t[0],node.depth=0,node.x=e,node.y=a,node.r=r,i=1;i<n;i++)left=2*i+1,i>=n||(nl=t[i],parent=t[nl.getParent(i)],nl.depth=parent.depth+1,i%2?(xyz=leftCoordinate(parent.x,parent.y,parent.r,nl.depth),nl.x=xyz.cx,nl.y=xyz.cy,nl.r=r):(xyz=rightCoordinate(parent.x,parent.y,parent.r,nl.depth),nl.x=xyz.cx,nl.y=xyz.cy,nl.r=r))},drawAll=function(t,e){if(t&&e<t.length){if(node=t[e],node.draw(),e){var n=new Line;parent=t[node.getParent(i)],n.draw(parent.getX(),parent.getY(),node.x,node.y,node.getRadius(),node.ctx)}drawAll(t,e+1)}},alertHeap=function(t){for(st="",i=0;i<t.length;i++)t[i]?st+=" "+t[i]:st+="[]";alert(st+"--\x3e"+t.length)},pop=function(t){n=t.length;var e,a,r=t[n-1],i=t[0].data;for(e=0;2*e+1<=n-1&&((a=2*e+1)<n-1&&t[a+1].data<t[a].data&&a++,r.data>t[a].data);e=a)t[e]=t[a];return t[e]=r,t.length=n-1,i},insertHeap=function(t,e,n){var a,r=e.length;e.length=r+1,r++;var i=new Node(t,n);if(e[r-1]=i,r>1){for(a=r-1;e[parseInt((a-1)/2)].data>n&&a>0;a=parseInt((a-1)/2))e[a]=e[parseInt((a-1)/2)];e[a]=i}else e.length=1,e[0]=i},ts=function(){var t=Date.now(),e=Date(Date(t)).toString().substring(4,15),n=new Date(e);n.setHours(22);var a=n.getTime();e+=" 23:59:00";var r=new Date(e).getTime();if(t<a)throw alert("Early: log 10 pm"),"";t>r&&alert("Late")},createShowTree=function(){var t=document.getElementById("my-canvas"),e=t.getContext("2d"),n=t.width,a=t.height;if(e.fillStyle="rgba(202, 206, 227, 1)",e.fillRect(0,0,n,a),e.beginPath(),e.font="bold 20px Courier New",bheap=new BHeap(e),input=document.getElementById("student-id"),name=getName(parseInt(input.value)),"null"!==name)if(document.getElementById("name").value=name,isNaN(parseInt(input.value)))alert("Enter Your Id");else{var r=genArrayX(parseInt(input.value),10);for(drawArray(e,r,50,30,0,10,middle=!0),i=0;i<r.length;i++){var h=i;i=h,bheap.insertHeap(r[i]),i=h}for(bheap.dispArrCanv(50,30,0,40,middle=!0),bheap.computeGeometry(n/2,100,15),bheap.drawAll(0),bheap.pop(),bheap.pop(),bheap.computeGeometry(n/2,360,15),bheap.drawAll(0),bheap.dispArrCanv(50,30,0,300,middle=!0),str="Question: Given an array : [",i=0;i<r.length-1;i++)str+=r[i]+",";str+=r[i],str+="] ",str+=",construct a heap by inserting each element in the array into an initially empty heap.\n",str+="Draw the binary heap tree and the resulting array. Then pop() twice two elements and redraw then tree and display the new array.\n",str+="Solution:\n......................Shown below.",document.getElementById("GFG").style.fontSize="20px",document.getElementById("GFG").innerText=str}else alert("Not a Valid Id Try Again")},addToTreeX=function(t){t?bheap.add(t):alert("Wrong input")};function myFunction(){void 0===myFunction.s&&(myFunction.s=1002),myFunction.s=Math.floor(100*seed(myFunction.s)+1),document.getElementById("demo").innerHTML=myFunction.s}var genArrayX=function(t,e){arr=[];for(var n=new Math.seedrandom(t.toString());arr.length<e;){for(s=parseInt(100*n()+1);arr.includes(s);)s++,s%=100,s++;arr.push(s)}return arr},zee=function(t,e){for(st=t.toString(),i=0;i<e;i++)st+="0";return parseInt(st)},cat=function(t){var e=[];for(e.length=t+1,e[0]=e[1]=1,i=2;i<=t;i++)for(e[i]=0,j=0;j<i;j++)e[i]+=e[j]*e[i-j-1];return e[t]},getName=function(t){const e=[3593,4359,4713,4951,5041,5081,5087,5107,5227,5358,5364,5469,5505,5509,5596,5634,5669,5692,5816,5825,5846,5891,5895,5940,5979,6055,6059,6060,6065,6076,6086,6099,6100,6103,6104,6117,6118,6119,6121,6126,6127,6129,6131,6133,6144,6149,6155,6160,6162,6166,6168,6171,6174,6189,6204,6206,6212,6216,6217,6218,6226,6227,6234,6239,6259,6261,6262,6268,6273,6277,6279,6286,6287,6290,6291,6292,6294,6303,6313,6315,6317,6318,6325,6328,6338,6340,6355,6369,6375,6376,6400,6460,6470,6474,6485,6486,6532,6535,6538,6543,6544,6586,6591,6594,6597,6611,6624,6627,6656,6657,6659,6660,6668,6669,6670,6671,6672,7777];if(cat(13)==zee(t+zee(21,1),3)-zee(341,2))return"Anonymous";return e.includes(t)?["محمد طارق فوزى حبشى","عبد الحليم محمد محمود محمد عبد المجيد","محمد ياسر محمد كمال الطحان","مجد محمد السيد عبد المحسن شحاته","رانيا حماد محمد حماد عبد الجليل","عبد الوهاب حمدى عبد الوهاب ميرا","بسنت محمد عبدالله عزت عباس","أحمد محمد عبد العزيز محمد يوسف","جون مابينى مجوك لويث","إيثار سمير عبد القادر سيد أحمد حجازى","عمر محمد فرماوى محمد على","منة الله إيهاب رمضان علي محمد","سمر أشرف محمد مصطفى الجمل","عبد الرحمن علاء محمد محمد البتانوني","يوسف محمد علي عباس","يارا سعيد مصطفى أحمد","عاصم أحمد محمود سلامه","أحمد السيد عبد المنعم أحمد مبروك","فادى السيد إبراهيم محمد","يوسف أحمد على خاطر","أحمد محى الدين إبراهيم شبيرو","نهى سيد محمد على محمد الحداد","يارا جمال محمد سالم غنيم","على محمد صلاح ابراهيم","ملك محمد فاروق قاسم","ميار أحمد رمضان أحمد عبد اللطيف","أحمد إبراهيم السعيد على الجمل","أحمد سعد أحمد محمد","أحمد أسامه احمد يوسف احمد خليل","بيرلا خالد محمد عبد الفتاح حاتم","أحمد حسام مصطفى محمد هيبه","نائل مصطفى محمد حسن منصور","باسم نبيل حسن محمد عبدالله أبو النصر","أدهم نصر محمد عبد الحافظ","باتريشيا عماد حلمى يوسف موسي","خالد جمال عبدالرحمن سويلم","طارق محمود بخيت طه محمد النجار","ردينه محمد صلاح محمد البهنسي","ريهام محمد السيد عبد العزيز أحمد","سلمى أحمد محمد أبو الفتوح","رؤيا عمرو محمد كشك","سلمى أشرف أحمد فتحى محمود أحمد","ساماندا طارق حسن تحسين محمد حسن","روان محمد محمود محمد","محمد أيمن فتحى سلام","محمد السيد محمد مصطفى عوض","محمد حسن الحسن محمد على عرابى","مازن مدحت فريد محمد سلام","محمد سعيد حسن على حسن عبد الحليم","محمد شريف أحمد أبو الفتوح جابر","مالك عماد الدين مصطفى","رافائيل رفيق بشرى حنا عوض","محمود حسام إسماعيل سامى قاسم","مصطفى عادل محمد محسن","ندى علاء محمد حسن أحمد مصطفى","يسرا عماد الدين محمود على","منار أحمد محمود مقلد رمضان","نوران ايهاب محمد محمد سليمان","وسيم رفيق عبده خورى","يحيي صلاح الدين ناصر سعد","هاجر حسام الدين محمد طلبه مرسي","يسر محمد نبيل حسنى بركات","منه الله مصطفى محمد مصطفى الكتبى","يوسف محمد صبرى محمد ابوابراهيم","يوسف حسن السيد احمد الشماع","نور الدين حازم عبدالسلام احمد محمد","عبد الرحمن محمد عطيه امين ابراهيم","على محمد محمود ممدوح عبد الحميد يوسف","عمرو ايمن على حسن على","اسراء السيد طنطاوى ناجى حجاج","عمر مختار محمود عبد الرحيم","علي همام السيد محمد همام","عمرو محمد صلاح الدين محمد","عمر محمد سمير عبد الوهاب","على خالد احمد احمد سليمان","عمر شريف الماس رفعت","عمر علاء عبد القادر عبد الفتاح","فادي سامح جرجس بطرس","محمود حسن محمود محمد","عمر أحمد حمدي محمد عبد المقصود","عمر سعد زغلول عبده","فرحة عادل محمد توفيق","عبدالله محمد سعيد محمد فؤاد علوش","حازم شعبان السيد عيد","أحمد محمد أحمد على السهلمى","علاء كمال على حسن البحيرى","محمد جمال عبد العظيم نوح","ميرنا محمد سليم محمد خليل","محمود احمد خليل أحمد خليل","أيه على عبد الوهاب ابراهيم نجا","دانا تامر نبيل أمين سليمان الزهيرى","أحمد وائل محمد السيد","مريم أشرف نعيم القمحاوى","زياد محمد السعيد البانوبى","منار احمد فؤاد محمد عبد القادر","أدهم وائل محمود محمود سالم","نوران هشام محمد إسماعيل","محمد علاء الدين رسلان","منه الله عبد المجيد عبد السلام عبد المجيد","أحمد عبد الرحمن عبد العزيز معروف","محمود ادهم محمود حافظ","محمد بهاء صلاح الدين حماد","عبد الرحمن جابر زايد عبد الرحمن","كريم محمود السيد صبره","اسراء محمود محمد عبد الفتاح","اسلام محمد مختار عبد الباقى","سيف محمد عبد الفتاح محمد حسن","ترنيمه الفجر حاتم محمد عبد العاطى محمد","مهند محمد محمود البسيونى بشار","حازم هاشم عبد الرحيم","أنس أحمد عبده عوض الله","ياسمين محمد عبد اللاه الطحان","يوسف فيكتور جرجس فهمى","أحمد عبد الكبير حسن محسب","محمد مدحت سعيد زيتون","زينب رضا علي سلامة جمعة","مصطفي محمد إبراهيم توفيق","انا صالح"][e.findIndex(e=>e==t)]:null},xorID=function(){var t=document.getElementById("student-id");"password"===t.type?t.type="text":t.type="password"},writeTextAt=function(t,e,n,a){e=e.toString();var r=t.measureText(e);n=parseInt(n-r.width/2),a=parseInt(a-(r.actualBoundingBoxAscent-r.actualBoundingBoxDescent)/2),t.strokeText(e,n,a)},drawArray=function(t,e,n,a,r,h,s=!1){var o=e.length,d=n*o,p=a,l=0;s&&(cw=document.getElementById("my-canvas").width,l+=parseInt((cw-d)/2),r=0),i=0;for(var u=0;u<=d;u+=n)t.moveTo(l+r+u,h),t.lineTo(l+r+u,p+h),i<o&&writeTextAt(t,e[i++],l+r+u+n/2,p+h);for(u=0;u<=p;u+=p)t.moveTo(l+r,u+h),t.lineTo(l+r+d,u+h);t.strokeStyle="black",t.stroke()};