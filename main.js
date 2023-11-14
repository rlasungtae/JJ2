var userValue = {
    budgetV : [],
    periodV : [],
    preferStyleV : [],
    nangManV : [],
    continentV : [],
    travelerV : '',
    ageV : '',
    sexV : '',
    pkgVSfreeV : [],
    foodV : []
}
var topMatches = [];




// 시작하기
document.querySelector('#start').addEventListener('click', function(){
	document.querySelector('#start').classList.add('hide');
	document.querySelector('#period').classList.add('show');
})



//기간
for(var i=0; i<3; i++){
	document.querySelector('#period').querySelectorAll('.box1')[i].addEventListener('click', function(e){
		document.querySelector('#period').classList.remove('show');
    document.querySelector('#budget').classList.add('show');

		if (e.target.value) {
      userValue.periodV.push(e.target.value);
	  
			userValue.periodV = userValue.periodV.map(value => {
				switch (value) {
					case 'period1':
						return 1;
					case 'period2':
						return 2;
					case 'period3':
						return 3;
					case 'period3':
					default:
						return value;
				}
			});
			// console.log(userValue.periodV);
    }
	})
}




// 예산
for(var i=0; i<5; i++){
	document.querySelector('#budget').querySelectorAll('.box1')[i].addEventListener('click', function(e){
		document.querySelector('#budget').classList.remove('show');
		document.querySelector('#preferStyle').classList.add('show');

		if (e.target.value) {
      userValue.budgetV.push(e.target.value);
      // console.log(userValue.budgetV);

	  
//입력받은 userValue값('budget' + i)값을 결과 산출 알고리즘과 국가 데이터베이스의 형식에 맞게(i) 변환
			userValue.budgetV = userValue.budgetV.map(value => {
				switch (value) {
					case 'budget1':
						return 1;
					case 'budget2':
						return 2;
					case 'budget3':
						return 3;
					case 'budget4':
						return 4;
					case 'budget5':
						return 5;
					default:
						return value;
				}
			});
			// console.log(userValue.budgetV);
    }
	})
}



//여행지
document.querySelector('#tour').addEventListener('click', function(){
	document.querySelector('#preferStyle').classList.remove('show');
	document.querySelector('#nangMan').classList.add('show');

	userValue.preferStyleV.push(1);
	// console.log(userValue.preferStyleV);
})

document.querySelector('#vacation').addEventListener('click', function(){
	document.querySelector('#preferStyle').classList.remove('show');
	document.querySelector('#nangMan').classList.add('show');

	userValue.preferStyleV.push(2);
	// console.log(userValue.preferStyleV);
})

document.querySelector('#survival').addEventListener('click', function(){
	document.querySelector('#preferStyle').classList.remove('show');
	document.querySelector('#nangMan').classList.add('show');

	userValue.preferStyleV.push(3);
	// console.log(userValue.preferStyleV);
})





// 낭만
for(var i=0; i<5; i++){
	document.querySelector('#nangMan').querySelectorAll('.box1')[i].addEventListener('click', function(e){
    document.querySelector('#nangMan').classList.remove('show');
    document.querySelector('#continent').classList.add('show');

		if (e.target.value) {
      userValue.nangManV.push(e.target.value);
      // console.log(userValue.nangManV);

			userValue.nangManV = userValue.nangManV.map(value => {
				switch (value) {
					case 'nangMan1':
						return 1;
					case 'nangMan2':
						return 2;
					case 'nangMan3':
						return 3;
					case 'nangMan4':
						return 4;
					case 'nangMan5':
						return 5;
					default:
						return value;
				}
			});
    }
		// console.log(userValue.nangManV);
	})
}


// 대륙
for(var i=0; i<7; i++){
	document.querySelector('#continent').querySelectorAll('.box1')[i].addEventListener('click', function(e){
    // if (typeof userValue.continentV === "string") {
		// 	userValue.continentV = [userValue.continentV];
		// }
			document.querySelector('#continent').classList.remove('show');
			document.querySelector('#traveler').classList.add('show');


    if (e.target.value) {
      userValue.continentV.push(e.target.value);
      

			userValue.continentV = userValue.continentV.map(value => {
				switch (value) {
					case 'continent1':
						return '남미';
					case 'continent2':
						return '북미';
				  case 'continent3':
						return '아시아';	
				  case 'continent4':
						return '아프리카';
				  case 'continent5':
						return '유럽';
				  case 'continent6':
						return '오세아니아';
				  case 'continent7':
						return '남극';
					default:
						return value;
				}
			});
    }
		// console.log(userValue.continentV);
	})
}


// 다음으로 넘어가는 기능
// document.querySelector('.next-btn').addEventListener('click', function(){
// 	document.querySelector('#continent').classList.remove('show');
// 	document.querySelector('#traveler').classList.add('show');
// })



//여행자
for(var i=0; i<5; i++){
	document.querySelector('#traveler').querySelectorAll('.box1')[i].addEventListener('click', function(){
    document.querySelector('#traveler').classList.remove('show');
    document.querySelector('#age').classList.add('show');
	})
}


//연령
for(var i=0; i<5; i++){
	document.querySelector('#age').querySelectorAll('.box1')[i].addEventListener('click', function(){
		document.querySelector('#age').classList.remove('show');
    document.querySelector('#sex').classList.add('show');
	})
}


//성별
document.querySelector('#male').addEventListener('click', function(){
	document.querySelector('#sex').classList.remove('show');
	document.querySelector('#pkgVSfree').classList.add('show');
})

document.querySelector('#female').addEventListener('click', function(){
	document.querySelector('#sex').classList.remove('show');
	document.querySelector('#pkgVSfree').classList.add('show');
})



//투어 종류
document.querySelector('#package').addEventListener('click', function(){
	document.querySelector('#pkgVSfree').classList.remove('show');
	document.querySelector('#tempo').classList.add('show');

	userValue.pkgVSfreeV.push(1);
	// console.log(userValue.pkgVSfreeV);
})
document.querySelector('#free').addEventListener('click', function(){
	document.querySelector('#pkgVSfree').classList.remove('show');
	document.querySelector('#tempo').classList.add('show');

	userValue.pkgVSfreeV.push(2);
	// console.log(userValue.pkgVSfreeV);
})


//여행 템포
document.querySelector('#tight').addEventListener('click', function(){
	document.querySelector('#tempo').classList.remove('show');
	document.querySelector('#food').classList.add('show');

})
document.querySelector('#chill').addEventListener('click', function(){
	document.querySelector('#tempo').classList.remove('show');
	document.querySelector('#food').classList.add('show');

})


//향신료 선호도
//국가들 중 향신료가 강한 나라 top30개만 선정하여 적용함
document.querySelector('#Gosu').addEventListener('click', function(){
	document.querySelector('#food').classList.remove('show');
	document.querySelector('#load-result').classList.remove('hide');
	document.querySelector('#load-result').classList.add('show');

	userValue.foodV.push(1);
	// console.log(userValue.foodV);
})
document.querySelector('#noGosu').addEventListener('click', function(){
	document.querySelector('#food').classList.remove('show');
	document.querySelector('#load-result').classList.remove('hide');
	document.querySelector('#load-result').classList.add('show');
	
	userValue.foodV.push(0);
	// console.log(userValue.foodV);
})




//load-Result
document.querySelector('#load-result').addEventListener('click', function(){

	document.querySelector('#load-result').classList.remove('show');
	document.querySelector('#load-result').classList.add('hide');
	document.querySelector('#result').classList.add('show');



	
//결과 산출 알고리즘

	// 비교 함수: 두 배열 간의 일치하는 요소 수 계산
	function getMatchingCount(arr1, arr2) {
		return arr1.filter(item => arr2.includes(item)).length;
	}

	//각 나라의 이름과 Count수를 담을 배열
	const matchingCounts = [];

	for (const country of countries) {
		let Count = 0;

		// budgetV와 periodV에는 3의 가중치
		// Count += (getMatchingCount(userValue.budgetV, country.budget) + getMatchingCount(userValue.periodV, country.period)) * 3;
		Count += getMatchingCount(userValue.budgetV, country.budget) * 3;
		Count += getMatchingCount(userValue.periodV, country.period) * 3;


		// preferStyle에 따라 가중치 부여
		for (const style of userValue.preferStyleV) {
			if (style === 1 || style === 2) { // 1 또는 2인 경우 가중치 1
				Count += getMatchingCount(userValue.preferStyleV, country.preferStyle);
			} else if (style === 3) { // 3인 경우 가중치 2
				Count += getMatchingCount(userValue.preferStyleV, country.preferStyle) * 2;
			}
		}


		//nangMan에 따라 가중치 부여
		for (const nM of userValue.nangManV) {
			if (nM === 1 || nM === 2 || nM === 3 || nM === 4) { // 1 ~ 4인 경우 가중치 0
				Count += getMatchingCount(userValue.nangManV, country.nangMan) * 0;
			} else if (nM === 5) { // 5인 경우 가중치 2
				Count += getMatchingCount(userValue.nangManV, country.nangMan) * 2;
			}
		}


		// continentV와 일치하는 경우 가중치 2
		for (const continent of userValue.continentV) {
			if (continent === country.continent) {
				Count += 10; 
			}
		}


		//pkgVSfreeV 일치 여부
		Count += getMatchingCount(userValue.pkgVSfreeV, country.pkgVSfree);

		// Count += getMatchingCount(userValue.foodV, country.food);
		for (const fd of userValue.foodV) {
			if (fd === 1) { 
				Count += getMatchingCount(userValue.foodV, country.food) * 1;
			} else if (fd === 0) { 
				Count += getMatchingCount(userValue.foodV, country.food) * 0;
			}
		}


		matchingCounts.push({ country: country.country, Count });
	}

	// 일치하는 특징 수를 기준으로 내림차순으로 정렬
	matchingCounts.sort((a, b) => b.Count - a.Count);

	// 결과 출력
	console.log('모든 적합한 국가들:');
	for (const match of matchingCounts) {
		console.log(`${match.country} (일치하는 특징 수: ${match.Count})`);
	}



	
// matchingCounts 배열에서 상위 3개의 국가를 가져옴
var topMatches = matchingCounts.slice(0, 3);
console.log(topMatches);


// 상위 3개 매칭 국가의 이름, 이미지 설정
for (let i = 0; i < 3; i++) {
	const imgElement = document.querySelectorAll('.result-img')[i];
	const countryImage = countries.find(country => country.country === topMatches[i].country).Image; 
	imgElement.src = countryImage;

	document.querySelectorAll('.result-title')[i].innerHTML = topMatches[i].country;

	const detailElement = document.querySelectorAll('.result-detail')[i];
	const countryInfo = countries.find(country => country.country === topMatches[i].country).detail; 
	detailElement.innerHTML = countryInfo;

	const capitalElement = document.querySelectorAll('.result-capital')[i];
	const countryCap = countries.find(country => country.country === topMatches[i].country).capital; 
	capitalElement.innerHTML = "수도: " + countryCap;

	const languageElement = document.querySelectorAll('.result-lang')[i];
	const countryLang = countries.find(country => country.country === topMatches[i].country).lang; 
	languageElement.innerHTML = "언어: " + countryLang;

	const currencyElement = document.querySelectorAll('.result-currency')[i];
	const countryCurrency = countries.find(country => country.country === topMatches[i].country).currency; 
 currencyElement.innerHTML = "화폐: " + countryCurrency;

}


})




















