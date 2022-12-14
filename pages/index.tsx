import type { NextPage } from "next";
import PageContainer from "../components/containers/PageContainer";
import styles from "../styles/Home.module.css";
import Header from "components/common/Header";
import { useState } from "react";
const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  const [isFlipped1, setIsFlipped1] = useState(false);

  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleHover2 = () => {
    setIsFlipped2(!isFlipped2);
  };
  const handleOut2 = () => {
    setIsFlipped2(isFlipped2);
  };
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleHover3 = () => {
    setIsFlipped3(!isFlipped3);
  };
  const handleOut3 = () => {
    setIsFlipped3(isFlipped3);
  };
  const [isFlipped4, setIsFlipped4] = useState(false);

  const handleHover4 = () => {
    setIsFlipped4(!isFlipped4);
  };
  const handleOut4 = () => {
    setIsFlipped4(isFlipped4);
  };
  return (
    <PageContainer title="XÂY DỰNG NHÀ Ở TRỌN GÓI">
      <div className={styles.container}>
        <div className={styles.body}>
          <Header/>
          <div className={styles.service}>
            <h1 className={styles.category}>THIẾT KẾ NHÀ ĐẸP</h1>
            <hr className={styles.divider} />
            <div className={styles.stall}>
              <div className={styles.item}>
                <img
                  className={styles.img}
                  src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg"
                />
                <div className={styles.name}>
                  <h3>Thiết kế nhà tân cổ điển</h3>
                </div>
                <div className={styles.info}>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <p className={styles.param}>Chủ đầu tư:</p>
                    <p>Mr. Hưởng</p>
                  </div>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-geo-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                      />
                    </svg>
                    <p className={styles.param}>Vị trí:</p>
                    <p>Tp. Tây Ninh</p>
                  </div>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    <p className={styles.param}>Quy mô:</p>
                    <p>Trệt + 1 lầu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <h1 className={styles.category}>NỘI THẤT LUNG LINH</h1>
            <hr className={styles.divider} />
            <div className={styles.stall}>
              <div className={styles.item}>
                <img
                  className={styles.img}
                  src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg"
                />
                <div className={styles.name}>
                  <h3>Thiết kế nhà tân cổ điển</h3>
                </div>
                <div className={styles.info}>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <p className={styles.param}>Chủ đầu tư:</p>
                    <p>Mr. Hưởng</p>
                  </div>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-geo-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                      />
                    </svg>
                    <p className={styles.param}>Vị trí:</p>
                    <p>Tp. Tây Ninh</p>
                  </div>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    <p className={styles.param}>Quy mô:</p>
                    <p>Trệt + 1 lầu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.service}>
            <h1 className={styles.category}>THI CÔNG XÂY DỰNG</h1>
            <hr className={styles.divider} />
            <div className={styles.stall}>
              <div className={styles.item}>
                <img
                  className={styles.img}
                  src="https://niemtinvang.vn/wp-content/uploads/2022/01/Mau-nha-Tan-co-dien-dep-o-Tp.-Tay-Ninh-1-scaled.jpg"
                />
                <div className={styles.name}>
                  <h3>Thiết kế nhà tân cổ điển</h3>
                </div>
                <div className={styles.info}>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <p className={styles.param}>Chủ đầu tư:</p>
                    <p>Mr. Hưởng</p>
                  </div>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-geo-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                      />
                    </svg>
                    <p className={styles.param}>Vị trí:</p>
                    <p>Tp. Tây Ninh</p>
                  </div>
                  <div className={styles.line}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="var(--color-primary)"
                      className="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                      />
                      <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                    </svg>
                    <p className={styles.param}>Quy mô:</p>
                    <p>Trệt + 1 lầu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
