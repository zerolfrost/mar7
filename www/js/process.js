// <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
//   <source src="movie.ogg" type="video/ogg">
//   Your browser does not support the video tag.
// </video>

let process = {
	menu:function(){
		let content = <div>
 			<audio id="ost1" src="audio/cf.mp3" loop></audio>
			<img src="img/main.png" width="100%" height="500px" class="lazy lazy-fadeIn demo-lazy"/>
			<center><ul>
				<a href='#' onClick={process.page1}><button className="ton">Female Soldiers</button></a>
				<a href='#' onClick={process.page2}><button className="ton">Male Soldiers</button></a><br/>
 <br/>
      <button onClick={play}>Play OST</button>
<button onClick={stop}>Stop OST</button>
				</ul>

				</center>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
		<audio id="ost1" src="audio/cf.mp3" loop></audio>

		<a href='#' onClick={process.menu}><button className="but">Back</button></a>
				<center className="text">Female Soldiers</center><br/>

				 <div class="page-content">
  
    
     <center> <p> <img src="img/arch.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
            <p> <img src="img/aurora.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
     <p> <img src="img/dx.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/fox.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/foxy.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/jtf.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/la swat.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/orchid summer.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/orchid.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/sable.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/spop elite.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/spop.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/star.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p><img src="img/thoth.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/trinity.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/trixy.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
		<p> <img src="img/vipers.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			</center></div>
		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},
	page2:function(){
		let content = <div>
		<audio id="ost1" src="audio/cf.mp3" loop></audio>
	
				 <div class="page-content">
    <div class="block block-strong">
    <a href='#' onClick={process.menu}><button className="but">Back</button></a>
		<center className="text">Male Soldiers</center>
	<center><p><img src="img/commando.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/gsg9.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/navy seals.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/omoh.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/opes.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/sas.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/sbs.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/sfg.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/sia.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/swat camo.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/swat.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/thoth.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/unsf.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			<p><img src="img/vvs.png" width="100%" height="300px" class="lazy lazy-fadeIn demo-lazy"/></p>
			
	</center></div>
	</div></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	loading:function(){
		let content = <div>
					<div className="progressbar-infinite color-multi"></div>
					<audio id="audio">
						<source src="audio/m60.mp3" type="audio/mp3" />
					</audio>
					<div align='center'>
						<img src='img/main.jpg' width='100%' height='600px' />
				<div className="progressbar-infinite color-multi"></div>
						<p className="text1">Please wait...</p>
				
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		process.audio('audio').play();
		process.replayAudio('audio');
	},
	audio:function(audio){
		let _audio = document.getElementById('audio');
		return _audio;
	},
	ost1:function(ost1){
		let _audio = document.getElementById('ost1');
		return _audio;
	},
	
	replayAudio:function(audio){
		process.audio('audio').addEventListener('ended',function(){
			process.audio('audio').pause();
			process.audio('audio').play();
		})
	}
}
					function play(){
  document.getElementById('ost1').play();
  }
function stop(){
document.getElementById('ost1').pause(); 
document.getElementById('ost1').currentTime = 0;
}
let counting = 0;
process.loading();
setTimeout(function(){
	process.audio('audio').pause();
	process.menu();
	process.ost1('ost1').play();
	process.menu();
	
	
},5000);
