/* @ds-bundle: {"format":3,"namespace":"WantedDesignSystem_019ded","components":[],"sourceHashes":{"ui_kits/wanted-app/HomeScreen.jsx":"e0e60e89669d","ui_kits/wanted-app/JobDetailScreen.jsx":"814bb35b9adf","ui_kits/wanted-app/ProfileScreen.jsx":"6cdef57754ce","ui_kits/wanted-app/SearchScreen.jsx":"6f1465b7d10a","ui_kits/wanted-app/components.jsx":"7073c83289cd","ui_kits/wanted-app/ios-frame.jsx":"d67eb3ffe562"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WantedDesignSystem_019ded = window.WantedDesignSystem_019ded || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/wanted-app/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// HomeScreen — Wanted App
// Curated job feed with chip filters

function HomeScreen({
  onJobClick
}) {
  const [activeFilter, setActiveFilter] = React.useState('전체');
  const [bookmarks, setBookmarks] = React.useState({});
  const filters = ['전체', '개발', '디자인', '마케팅', '데이터', 'PM', '기획'];
  const jobs = [{
    id: 1,
    company: '원티드랩',
    logo: 'W',
    logoColor: '#0066FF',
    title: '프론트엔드 개발자 (React/Next.js)',
    location: '서울',
    career: '경력 3~5년',
    reward: '1,000,000원',
    category: '개발'
  }, {
    id: 2,
    company: '카카오',
    logo: 'K',
    logoColor: '#FEE500',
    title: 'iOS 개발자 (Swift)',
    location: '판교',
    career: '신입/경력',
    reward: '500,000원',
    category: '개발'
  }, {
    id: 3,
    company: '라인플러스',
    logo: 'L',
    logoColor: '#06C755',
    title: 'UI/UX 디자이너',
    location: '분당',
    career: '경력 2년+',
    reward: '800,000원',
    category: '디자인'
  }, {
    id: 4,
    company: '크래프톤',
    logo: 'C',
    logoColor: '#E8492D',
    title: '게임 서버 백엔드 개발자',
    location: '서울',
    career: '경력 5년+',
    reward: '1,500,000원',
    category: '개발'
  }, {
    id: 5,
    company: '토스',
    logo: 'T',
    logoColor: '#0064FF',
    title: '그로스 마케터',
    location: '서울',
    career: '경력 3년+',
    reward: '700,000원',
    category: '마케팅'
  }, {
    id: 6,
    company: '당근마켓',
    logo: 'D',
    logoColor: '#FF6F0F',
    title: '데이터 분석가 (SQL/Python)',
    location: '서울',
    career: '경력 2년+',
    reward: '600,000원',
    category: '데이터'
  }, {
    id: 7,
    company: '네이버',
    logo: 'N',
    logoColor: '#03C75A',
    title: 'Product Manager',
    location: '분당',
    career: '경력 5년+',
    reward: '1,200,000원',
    category: 'PM'
  }, {
    id: 8,
    company: '쿠팡',
    logo: 'Q',
    logoColor: '#FF0000',
    title: 'Brand Designer',
    location: '서울',
    career: '경력 3년+',
    reward: '900,000원',
    category: '디자인'
  }];
  const filtered = activeFilter === '전체' ? jobs : jobs.filter(j => j.category === activeFilter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: T.bg2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bg1,
      padding: '12px 16px 0',
      borderBottom: `1px solid ${T.border}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wanted-logotype.svg",
    style: {
      height: 22
    },
    alt: "Wanted",
    onError: e => {
      e.target.style.display = 'none';
      e.target.nextSibling.style.display = 'block';
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'none',
      fontSize: 18,
      fontWeight: 800,
      color: T.fg1,
      fontFamily: T.font,
      letterSpacing: '-0.02em'
    }
  }, "wanted"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(IconSearch, null)), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 6,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconBell, null), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: T.red,
      border: `1.5px solid ${T.bg1}`
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      overflowX: 'auto',
      paddingBottom: 12,
      scrollbarWidth: 'none'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    label: f,
    active: activeFilter === f,
    onClick: () => setActiveFilter(f)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#0066FF 0%,#004DC0 100%)',
      borderRadius: 16,
      padding: '20px 20px',
      color: '#fff',
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      fontFamily: T.font,
      opacity: 0.7,
      marginBottom: 4,
      letterSpacing: '0.04em'
    }
  }, "TODAY'S PICK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      fontFamily: T.font,
      lineHeight: '26px',
      letterSpacing: '-0.002em'
    }
  }, "\uB2F9\uC2E0\uC5D0\uAC8C \uB9DE\uB294", /*#__PURE__*/React.createElement("br", null), "\uCEE4\uB9AC\uC5B4\uB97C \uCC3E\uC544\uB4DC\uB824\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 28,
      padding: '0 12px',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: 9999,
      fontSize: 12,
      fontWeight: 600,
      fontFamily: T.font,
      cursor: 'pointer'
    }
  }, "\uD504\uB85C\uD544 \uC644\uC131\uD558\uAE30 \u2192"))), filtered.map(job => /*#__PURE__*/React.createElement(JobCard, _extends({
    key: job.id
  }, job, {
    bookmarked: !!bookmarks[job.id],
    onBookmark: () => setBookmarks(b => ({
      ...b,
      [job.id]: !b[job.id]
    })),
    onClick: () => onJobClick && onJobClick(job)
  })))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-app/JobDetailScreen.jsx
try { (() => {
// JobDetailScreen — Wanted App

function JobDetailScreen({
  job,
  onBack
}) {
  const [bookmarked, setBookmarked] = React.useState(false);
  const [applied, setApplied] = React.useState(false);
  if (!job) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: T.bg1
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "",
    onBack: onBack,
    rightSlot: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setBookmarked(b => !b),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 6
      }
    }, /*#__PURE__*/React.createElement(IconBookmark, {
      filled: bookmarked,
      size: 22
    })), /*#__PURE__*/React.createElement("button", {
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 6
      }
    }, /*#__PURE__*/React.createElement(IconShare, null)))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 16px 16px',
      background: T.bg1,
      borderBottom: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(CompanyLogo, {
    initials: job.logo,
    color: job.logoColor,
    size: 52
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: T.fg3,
      fontFamily: T.font,
      marginBottom: 4
    }
  }, job.company), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font,
      lineHeight: '26px',
      letterSpacing: '-0.002em'
    }
  }, job.title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    label: job.location
  }), /*#__PURE__*/React.createElement(Tag, {
    label: job.career
  }), /*#__PURE__*/React.createElement(Tag, {
    label: "\uC815\uADDC\uC9C1"
  }), /*#__PURE__*/React.createElement(Tag, {
    label: "\uCD94\uCC9C",
    color: "blue"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '12px 16px',
      background: T.blueSubtle,
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: T.blue,
      fontFamily: T.font,
      marginBottom: 2
    }
  }, "\uD569\uACA9 \uBCF4\uC0C1\uAE08"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: T.blue,
      fontFamily: T.font,
      letterSpacing: '-0.012em'
    }
  }, job.reward)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.blue,
      fontFamily: T.font,
      opacity: 0.7
    }
  }, "\uC9C0\uC778 \uCD94\uCC9C \uC2DC \uC9C0\uAE09")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font,
      marginBottom: 12,
      letterSpacing: '-0.002em'
    }
  }, "\uD3EC\uC9C0\uC158 \uC0C1\uC138"), [{
    heading: '주요 업무',
    items: ['서비스 프론트엔드 개발 및 유지보수', '사용자 경험 개선을 위한 UI 컴포넌트 개발', '협업을 위한 디자인 시스템 구축 및 관리', '성능 최적화 및 코드 품질 개선']
  }, {
    heading: '자격 요건',
    items: ['React 기반 웹 서비스 개발 경험 3년 이상', 'TypeScript 사용 경험', 'REST API 연동 경험', '협업 도구 사용 경험 (Figma, Jira 등)']
  }, {
    heading: '우대 사항',
    items: ['Next.js 경험', '디자인 시스템 구축 경험', 'CSS-in-JS 경험 (Styled-components, Emotion)']
  }].map(section => /*#__PURE__*/React.createElement("div", {
    key: section.heading,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font,
      marginBottom: 8,
      letterSpacing: '0.010em'
    }
  }, section.heading), section.items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 6,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: T.fg3,
      marginTop: 9,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: T.fg2,
      fontFamily: T.font,
      lineHeight: '22px',
      letterSpacing: '0.015em'
    }
  }, item))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bg2,
      borderRadius: 12,
      padding: 16,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font,
      marginBottom: 8
    }
  }, job.company, " \uC815\uBCF4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, [['업종', 'IT / 인터넷'], ['기업규모', '중견기업'], ['설립', '2015년'], ['직원수', '200~500명']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.fg3,
      fontFamily: T.font,
      width: 56,
      flexShrink: 0
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: T.fg2,
      fontFamily: T.font
    }
  }, v))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      background: T.bg1,
      borderTop: `1px solid ${T.border}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SolidBtn, {
    label: applied ? '✓ 지원 완료' : '지원하기',
    color: applied ? 'assistive' : 'primary',
    size: "lg",
    fullWidth: true,
    onClick: () => setApplied(true)
  })));
}
Object.assign(window, {
  JobDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-app/JobDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-app/ProfileScreen.jsx
try { (() => {
// ProfileScreen — Wanted App MY page

function ProfileScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: T.bg2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bg1,
      padding: '16px 16px 0',
      borderBottom: `1px solid ${T.border}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font,
      letterSpacing: '-0.012em',
      marginBottom: 16
    }
  }, "MY")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bg1,
      padding: '20px 16px',
      borderBottom: `1px solid ${T.border}`,
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "\uC720",
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font,
      marginBottom: 3
    }
  }, "\uC720\uBBFC\uC900"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.fg3,
      fontFamily: T.font,
      marginBottom: 8
    }
  }, "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790 \xB7 \uACBD\uB825 4\uB144"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: T.bg3,
      borderRadius: 9999,
      padding: '4px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: T.green
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: T.fg2,
      fontFamily: T.font
    }
  }, "\uAD6C\uC9C1\uC911")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: T.blueSubtle,
      borderRadius: 9999,
      padding: '4px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: T.blue,
      fontFamily: T.font
    }
  }, "\uC774\uB825\uC11C \uC791\uC131\uC911")))), /*#__PURE__*/React.createElement(IconChevronRight, {
    size: 18,
    color: T.fg4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bg1,
      margin: '8px 0',
      padding: '16px',
      borderTop: `1px solid ${T.border}`,
      borderBottom: `1px solid ${T.border}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, [['지원한 공고', '3'], ['저장한 공고', '12'], ['추천인 보상', '3,000원']].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font
    }
  }, val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: T.fg3,
      fontFamily: T.font
    }
  }, label))))), [{
    title: '내 활동',
    items: [{
      title: '지원 현황',
      subtitle: '3개의 지원',
      showDot: false
    }, {
      title: '저장한 공고',
      subtitle: '12개',
      showDot: false
    }, {
      title: '추천한 공고',
      subtitle: '보상금 확인하기',
      showDot: false
    }]
  }, {
    title: '내 정보',
    items: [{
      title: '이력서 관리',
      subtitle: '1개의 이력서',
      showDot: true
    }, {
      title: '포트폴리오',
      subtitle: '미등록',
      showDot: false
    }, {
      title: '희망 포지션 설정',
      subtitle: '프론트엔드 개발자',
      showDot: false
    }]
  }, {
    title: '설정',
    items: [{
      title: '알림 설정',
      showDot: false
    }, {
      title: '계정 설정',
      showDot: false
    }, {
      title: '고객센터',
      showDot: false
    }]
  }].map(group => /*#__PURE__*/React.createElement("div", {
    key: group.title,
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 4px',
      fontSize: 12,
      fontWeight: 700,
      color: T.fg3,
      fontFamily: T.font,
      letterSpacing: '0.03em'
    }
  }, group.title), /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bg1,
      borderTop: `1px solid ${T.border}`,
      borderBottom: `1px solid ${T.border}`
    }
  }, group.items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.title,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderBottom: i < group.items.length - 1 ? `1px solid ${T.border}` : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: T.fg1,
      fontFamily: T.font
    }
  }, item.title), item.subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: T.fg3,
      fontFamily: T.font,
      marginTop: 2
    }
  }, item.subtitle)), item.showDot && /*#__PURE__*/React.createElement("span", {
    style: {
      background: T.red,
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      padding: '2px 6px',
      borderRadius: 9999,
      fontFamily: T.font
    }
  }, "N"), /*#__PURE__*/React.createElement(IconChevronRight, {
    size: 16,
    color: T.fg4
  }))))))));
}
Object.assign(window, {
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-app/ProfileScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-app/SearchScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SearchScreen — Wanted App

function SearchScreen() {
  const [query, setQuery] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const recents = ['프론트엔드 개발자', 'React', '카카오', '원격근무', 'UX 디자이너'];
  const popular = ['백엔드 개발자', '데이터 사이언티스트', 'iOS 개발자', 'Product Manager', '디자인 시스템', '안드로이드 개발자'];
  const results = query ? [{
    id: 10,
    company: '라인',
    logo: 'L',
    logoColor: '#06C755',
    title: `${query} 포지션`,
    location: '성남',
    career: '경력 2년+',
    reward: '800,000원',
    category: '개발'
  }, {
    id: 11,
    company: '쿠팡',
    logo: 'Q',
    logoColor: '#FF0000',
    title: `시니어 ${query}`,
    location: '서울',
    career: '경력 5년+',
    reward: '1,000,000원',
    category: '개발'
  }] : [];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: T.bg2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bg1,
      padding: '12px 16px',
      borderBottom: `1px solid ${T.border}`,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: T.bg2,
      borderRadius: 10,
      padding: '0 12px',
      height: 40,
      border: focused ? `1.5px solid ${T.blue}` : `1.5px solid transparent`,
      transition: 'border-color 0.15s'
    }
  }, /*#__PURE__*/React.createElement(IconSearch, {
    size: 18,
    color: T.fg3
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    placeholder: "\uD68C\uC0AC, \uC9C1\uBB34, \uAE30\uC220 \uC2A4\uD0DD \uAC80\uC0C9",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: 15,
      fontFamily: T.font,
      color: T.fg1,
      fontWeight: 500,
      letterSpacing: '0.010em'
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuery(''),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 2,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: T.fg4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6M7 1L1 7",
    stroke: "#fff",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, results.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: T.fg3,
      fontFamily: T.font,
      letterSpacing: '0.019em'
    }
  }, "\uAC80\uC0C9 \uACB0\uACFC ", results.length, "\uAC74"), results.map(job => /*#__PURE__*/React.createElement(JobCard, _extends({
    key: job.id
  }, job)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font
    }
  }, "\uCD5C\uADFC \uAC80\uC0C9\uC5B4"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 12,
      color: T.fg3,
      fontFamily: T.font
    }
  }, "\uC804\uCCB4 \uC0AD\uC81C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, recents.map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    onClick: () => setQuery(r),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: '0 12px',
      background: T.bg1,
      border: `1px solid ${T.border}`,
      borderRadius: 9999,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 500,
      color: T.fg2,
      fontFamily: T.font
    }
  }, r, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l6 6M8 2L2 8",
    stroke: T.fg4,
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font,
      marginBottom: 10
    }
  }, "\uC778\uAE30 \uAC80\uC0C9\uC5B4"), popular.map((term, i) => /*#__PURE__*/React.createElement("div", {
    key: term,
    onClick: () => setQuery(term),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderBottom: `1px solid ${T.border}`,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: T.blue,
      fontFamily: T.font,
      width: 20,
      textAlign: 'center'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: T.fg1,
      fontFamily: T.font,
      flex: 1
    }
  }, term), i < 3 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: T.red,
      fontFamily: T.font
    }
  }, "UP")))))));
}
Object.assign(window, {
  SearchScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-app/SearchScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-app/components.jsx
try { (() => {
// Wanted App — Shared Tokens + Base Components
// Load with <script type="text/babel" src="components.jsx">

const T = {
  // Colors
  blue: '#0066FF',
  blueHover: '#005EEB',
  blueSubtle: '#EAF2FE',
  red: '#FF4242',
  green: '#00BF40',
  black: '#000000',
  fg1: '#171719',
  fg2: '#37383C',
  fg3: '#70737C',
  fg4: '#C2C4C8',
  bg1: '#FFFFFF',
  bg2: '#F7F7F8',
  bg3: '#F4F4F5',
  border: 'rgba(112,115,124,0.22)',
  borderMd: 'rgba(112,115,124,0.4)',
  // Type
  font: "'Pretendard JP', 'Pretendard', -apple-system, sans-serif"
};

// ── Icon primitives ──────────────────────────────
function IconSearch({
  size = 22,
  color = T.fg3
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 16.5L21 21",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
function IconBell({
  size = 22,
  color = T.fg2
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
function IconBookmark({
  size = 22,
  color = T.fg3,
  filled = false
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? T.blue : 'none'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
    stroke: filled ? T.blue : color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function IconChevronRight({
  size = 16,
  color = T.fg4
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3l5 5-5 5",
    stroke: color,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function IconHome({
  size = 24,
  active = false
}) {
  const c = active ? T.blue : T.fg3;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: active ? T.blueSubtle : 'none'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 22V12h6v10",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function IconBriefcase({
  size = 24,
  active = false
}) {
  const c = active ? T.blue : T.fg3;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2",
    stroke: c,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
function IconUsers({
  size = 24,
  active = false
}) {
  const c = active ? T.blue : T.fg3;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4",
    stroke: c,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
function IconUser({
  size = 24,
  active = false
}) {
  const c = active ? T.blue : T.fg3;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4",
    stroke: c,
    strokeWidth: "2"
  }));
}
function IconMenu({
  size = 24,
  active = false
}) {
  const c = active ? T.blue : T.fg3;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M3 6h18M3 18h18",
    stroke: c,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
function IconArrowLeft({
  size = 24,
  color = T.fg1
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M12 5l-7 7 7 7",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function IconShare({
  size = 22,
  color = T.fg2
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 6 12 2 8 6",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "15",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
}
function IconSetting({
  size = 22,
  color = T.fg2
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3",
    stroke: color,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
    stroke: color,
    strokeWidth: "2"
  }));
}
function IconApple({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "#171719"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
  }));
}
function IconGoogle({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
    fill: "#4285F4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
    fill: "#34A853"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
    fill: "#FBBC05"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
    fill: "#EA4335"
  }));
}

// ── Reusable UI Atoms ─────────────────────────────
function Chip({
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      height: 32,
      padding: '0 14px',
      borderRadius: 9999,
      border: 'none',
      cursor: 'pointer',
      background: active ? T.fg1 : T.bg3,
      color: active ? '#fff' : T.fg2,
      fontSize: 13,
      fontWeight: 600,
      fontFamily: T.font,
      letterSpacing: '0.019em',
      whiteSpace: 'nowrap',
      transition: 'all 0.12s'
    }
  }, label);
}
function Tag({
  label,
  color = 'neutral'
}) {
  const styles = {
    neutral: {
      bg: T.bg3,
      fg: T.fg3
    },
    blue: {
      bg: T.blueSubtle,
      fg: T.blue
    },
    green: {
      bg: '#EDFFF4',
      fg: '#009930'
    },
    red: {
      bg: '#FFF0F0',
      fg: T.red
    }
  };
  const s = styles[color] || styles.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 8px',
      borderRadius: 4,
      background: s.bg,
      color: s.fg,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontFamily: T.font
    }
  }, label);
}
function CompanyLogo({
  initials = 'W',
  color = T.blue,
  size = 40
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 10,
      background: color,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.35,
      fontWeight: 700,
      fontFamily: T.font,
      flexShrink: 0
    }
  }, initials);
}
function Avatar({
  initials = '유',
  size = 40
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: '#EAF2FE',
      color: T.blue,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.38,
      fontWeight: 700,
      fontFamily: T.font,
      flexShrink: 0
    }
  }, initials);
}
function JobCard({
  company,
  logo,
  logoColor,
  title,
  location,
  career,
  reward,
  bookmarked,
  onBookmark,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: T.bg1,
      border: `1px solid ${T.border}`,
      borderRadius: 16,
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CompanyLogo, {
    initials: logo,
    color: logoColor,
    size: 36
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: T.fg3,
      fontFamily: T.font,
      letterSpacing: '0.019em'
    }
  }, company)), /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      e.stopPropagation();
      onBookmark && onBookmark();
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IconBookmark, {
    filled: bookmarked,
    color: T.fg4,
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: T.fg1,
      lineHeight: '22px',
      letterSpacing: '0.010em',
      fontFamily: T.font
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    label: location
  }), /*#__PURE__*/React.createElement(Tag, {
    label: career
  }), reward && /*#__PURE__*/React.createElement(Tag, {
    label: "\uCD94\uCC9C",
    color: "blue"
  })), reward && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: T.blue,
      fontFamily: T.font
    }
  }, "\uD569\uACA9 \uBCF4\uC0C1\uAE08 ", reward));
}
function ListCell({
  icon,
  title,
  subtitle,
  trailing,
  onClick,
  showDot
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      background: T.bg1,
      borderBottom: `1px solid ${T.border}`,
      cursor: onClick ? 'pointer' : 'default',
      minHeight: 60
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: T.bg3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: T.fg1,
      fontFamily: T.font,
      letterSpacing: '0.010em'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: T.fg3,
      fontFamily: T.font,
      letterSpacing: '0.019em'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, showDot && /*#__PURE__*/React.createElement("span", {
    style: {
      background: T.red,
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      padding: '2px 6px',
      borderRadius: 9999,
      fontFamily: T.font
    }
  }, "N"), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: T.fg3,
      fontFamily: T.font
    }
  }, trailing), onClick && /*#__PURE__*/React.createElement(IconChevronRight, null)));
}
function SolidBtn({
  label,
  color = 'primary',
  size = 'md',
  onClick,
  fullWidth
}) {
  const sizes = {
    xs: {
      h: 28,
      px: 10,
      fs: 12
    },
    sm: {
      h: 34,
      px: 14,
      fs: 14
    },
    md: {
      h: 40,
      px: 16,
      fs: 15
    },
    lg: {
      h: 48,
      px: 20,
      fs: 16
    }
  };
  const colors = {
    primary: {
      bg: T.blue,
      fg: '#fff'
    },
    strong: {
      bg: T.fg1,
      fg: '#fff'
    },
    assistive: {
      bg: T.bg3,
      fg: T.fg1
    },
    outline: {
      bg: 'transparent',
      fg: T.blue,
      border: `1.5px solid ${T.blue}`
    }
  };
  const s = sizes[size] || sizes.md;
  const c = colors[color] || colors.primary;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      height: s.h,
      padding: `0 ${s.px}px`,
      background: c.bg,
      color: c.fg,
      border: c.border || 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: s.fs,
      fontWeight: 600,
      fontFamily: T.font,
      letterSpacing: '0.006em',
      whiteSpace: 'nowrap',
      width: fullWidth ? '100%' : 'auto',
      transition: 'opacity 0.15s'
    }
  }, label);
}
function TopBar({
  title,
  onBack,
  rightSlot
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px',
      background: T.bg1,
      borderBottom: `1px solid ${T.border}`,
      flexShrink: 0,
      gap: 4
    }
  }, onBack ? /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 10px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconArrowLeft, null)) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 700,
      color: T.fg1,
      fontFamily: T.font,
      letterSpacing: '-0.012em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      display: 'flex',
      justifyContent: 'center'
    }
  }, rightSlot));
}
function BottomNav({
  active,
  onChange
}) {
  const tabs = [{
    id: 'home',
    label: '홈',
    icon: a => /*#__PURE__*/React.createElement(IconHome, {
      active: a
    })
  }, {
    id: 'jobs',
    label: '채용',
    icon: a => /*#__PURE__*/React.createElement(IconBriefcase, {
      active: a
    })
  }, {
    id: 'social',
    label: '소셜',
    icon: a => /*#__PURE__*/React.createElement(IconUsers, {
      active: a
    })
  }, {
    id: 'mypage',
    label: 'MY',
    icon: a => /*#__PURE__*/React.createElement(IconUser, {
      active: a
    })
  }, {
    id: 'menu',
    label: '더보기',
    icon: a => /*#__PURE__*/React.createElement(IconMenu, {
      active: a
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      display: 'flex',
      background: T.bg1,
      borderTop: `1px solid ${T.border}`,
      flexShrink: 0
    }
  }, tabs.map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.id,
    onClick: () => onChange(tab.id),
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 3,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, tab.icon(active === tab.id), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      fontFamily: T.font,
      color: active === tab.id ? T.blue : T.fg3,
      letterSpacing: '0.02em'
    }
  }, tab.label))));
}
Object.assign(window, {
  T,
  Chip,
  Tag,
  CompanyLogo,
  Avatar,
  JobCard,
  ListCell,
  SolidBtn,
  TopBar,
  BottomNav,
  IconSearch,
  IconBell,
  IconBookmark,
  IconChevronRight,
  IconHome,
  IconBriefcase,
  IconUsers,
  IconUser,
  IconMenu,
  IconArrowLeft,
  IconShare,
  IconSetting,
  IconApple,
  IconGoogle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wanted-app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wanted-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

})();
