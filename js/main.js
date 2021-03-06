

	console.log(window.location.href)



	let imgShow=document.querySelector('#showImg');
	let imgPicker=document.querySelector('#imgPicker');
	let imgEditor=document.querySelector('.wrapper');
	let choosePic=document.querySelector("#choosePic");

	const options={
		container:'.wrapper',   //必填 挂载容器
		imageUrl:'',//必填 图片url
		limit:{
			minWidth:50,//宽度限制
			maxWidth:400,
			minHeight:100,//高度限制
			maxHeight:400,
			maxSize:50,//图片大小限制 kb
			proportion:1/1,//宽高比
		},
		beforeReadFile:function(){
			imgEditor.style.display='block';
		},
		afterRender:function(){
		}
	}

	let editor=new ImageEditor(options);


	imgPicker.addEventListener('change',function(e){
		let file=e.target.files[0];
		editor.readFile(file);
	})
	choosePic.addEventListener("click",function(e){
		imgPicker.click()
	})


	document.querySelector('#save').addEventListener('click',function(e){
		editor.save(function(url,blob){
			imgShow.src=url;
		});
		imgEditor.style.display='none';
	});
	document.getElementById('rotate90').addEventListener('click',function(e){
		editor.rotateZ(90);
	});
	document.querySelector('#cancel').addEventListener('click',function(e){
		imgEditor.style.display='none';
	})
	document.querySelector('#scaleToOrigin').addEventListener('click',function(e){
		editor.scaleInCenter(1-editor.scale);
	})