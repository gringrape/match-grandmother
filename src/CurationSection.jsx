import styled from 'styled-components'

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: .5em;
  border: 1px solid black;

  h2 {
    font-size: 1.8em;
    font-weight: bold;
  }
`

const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border: 1px solid black;

  button {
    font-size: 1.5em;
    padding: .5em;
  }
`

const HeadLine = styled.section`
  h3 {
    font-size: 1.5em;
    text-align: center;
    line-height: 1.2;
  }

  padding: .5em;
  border: 1px solid black;
`

const Brief = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1em;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5em;
  }

  h4 {
    font-size: 1.5em;
    font-weight: bold;
  }

  img {
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: .5em;

    li {
      padding: .5em;
      text-align: center;
      border: 1px solid black;
    }
  }
`

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;

  ul {
    display: flex;
    gap: .5em;

    li {
      background: black;
      padding: .5em;
      color: #eee;
    }
  }

  article {
    border: 1px solid black;
    padding: .5em;

    h4 {
      font-size: 1.3em;
      font-weight: bold;
      margin-bottom: 1em;
    }
  }
`

export default function CurationSection() {
  return (
    <Article>
      <TitleSection>
        <h2>금주의 중매소개서</h2>
        <a>﹥전체보기</a>
      </TitleSection>
      <BodySection>
        <HeadLine>
          <h3>
            월세 70만원 내는 멍청한 놈 있냐?
            <br />
            {' '}
            잔소리 듣기 싫으면 청약혀라 참말로
          </h3>
        </HeadLine>
        <Brief>
          <div>
            <div>
              종합매력도: ⭐️⭐️⭐️⭐️⭐️
            </div>
            <h4>힐스테이트 강남 아파트</h4>
            <ul>
              <li>
                월세 00만원
              </li>
              <li>
                000세대 모집
              </li>
              <li>
                12평/방 2개
              </li>
            </ul>
          </div>
          <div>
            <img alt="아파트 조감도" src="https://building2.auric.or.kr/Upload/BuildingImg/Large/6996_0875fec9-6699-42ad-8f5a-e3fd4a4d41c8.jpg?width=900" />
          </div>
        </Brief>
        <Explain>
          <ul>
            <li>저렴함</li>
            <li>최장 10년</li>
            <li>지하철 5분</li>
          </ul>
          <article>
            <h4>중매 뽀인트</h4>
            <p>
              강남 출퇴근 10분! 집 깨끗함.
              이제 막 가출한 신입사원이 적당혀!
            </p>
          </article>
        </Explain>
        <button type="button">
          상세보기
        </button>
      </BodySection>
    </Article>
  )
}
