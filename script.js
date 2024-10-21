document.addEventListener('DOMContentLoaded', function() {
    var profileImage = document.querySelector('.profile-image');

    function animateProfileImage() {
        // 초기 상태로 되돌리기
        profileImage.style.left = '489px'; // 초기 위치
        profileImage.style.opacity = '0.1'; // 초기 투명도

        // 애니메이션 시작
        setTimeout(function() {
            profileImage.style.transition = 'left 2s ease, opacity 2s ease'; // 애니메이션 적용 (1초)
            profileImage.style.left = '641px'; // 최종 위치로 이동
            profileImage.style.opacity = '1'; // 최종 투명도 100%
        }, 10); // 약간의 지연 후 애니메이션 시작
    }

    // IntersectionObserver 설정
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // 이미지가 화면 안으로 들어왔을 때 애니메이션 실행
                animateProfileImage();
            } else {
                // 이미지가 화면에서 사라지면 초기화
                profileImage.style.transition = 'none'; // 애니메이션 없이 초기 상태로 복귀
                profileImage.style.left = '489px'; // 초기 위치로 되돌리기
                profileImage.style.opacity = '0.1'; // 초기 투명도
            }
        });
    }, {
        threshold: 0 // 요소가 화면에 한 픽셀이라도 나타나면 트리거
    });

    // 프로필 이미지에 옵저버 연결
    observer.observe(profileImage);
});

document.addEventListener('DOMContentLoaded', function() {
    const graduationText = document.querySelector('.graduation-text');
    const options = {
        root: null, // 뷰포트 기준으로 감지
        rootMargin: '0px',
        threshold: 0.1 // 요소의 10% 이상이 보일 때 애니메이션 시작
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 보일 때
                graduationText.style.transform = 'translateX(0)'; // 원래 위치로 이동
                graduationText.style.opacity = '1'; // 불투명하게 설정
            } else {
                // 화면에 보이지 않을 때
                graduationText.style.transform = 'translateX(125px)'; // 초기 위치로 이동
                graduationText.style.opacity = '0.1'; // 투명하게 설정
            }
        });
    }, options);

    observer.observe(graduationText);
});

/* 자격증 및 경력*/
document.addEventListener('DOMContentLoaded', function() {
    const certificationsText = document.querySelector('.certifications');
    const careerText = document.querySelector('.career');
    const illustrationImage = document.querySelector('.second-additional-image');

    const options = {
        root: null, // 뷰포트 기준으로 감지
        rootMargin: '0px',
        threshold: 0.1 // 요소의 10% 이상이 보일 때 애니메이션 시작
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 보일 때 애니메이션 시작
                setTimeout(() => {
                    certificationsText.style.transform = 'translateX(0)'; // ACP 자격증 텍스트 이동
                    certificationsText.style.opacity = '1'; // 투명도 100%

                    careerText.style.transform = 'translateX(0)'; // 프리랜서 경력 텍스트 이동
                    careerText.style.opacity = '1'; // 투명도 100%

                    illustrationImage.style.transform = 'translateX(0)'; // 일러스트 이미지 이동
                    illustrationImage.style.opacity = '1'; // 투명도 100%
                }, 300); // 약간의 지연 후 애니메이션 시작
            } else {
                // 화면에 보이지 않을 때 초기화
                certificationsText.style.transform = 'translateX(180px)'; // ACP 자격증 초기 위치
                certificationsText.style.opacity = '0.3'; // 투명도 30%

                careerText.style.transform = 'translateX(107px)'; // 프리랜서 경력 초기 위치
                careerText.style.opacity = '0.3'; // 투명도 30%

                illustrationImage.style.transform = 'translateX(153px)'; // 일러스트 이미지 초기 위치
                illustrationImage.style.opacity = '0.3'; // 투명도 30%
            }
        });
    }, options);

    observer.observe(certificationsText);
    observer.observe(careerText);
    observer.observe(illustrationImage);
});

/* */
