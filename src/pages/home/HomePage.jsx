import React from "react";
import "../../assets/styles/page/home.page.scss";
import StoryUser from "../../components/storyCard/StoryUser";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { storyUserData } from "../../data/userStory";
import { Link } from "react-router-dom";
import { LabelNameUser } from "../../components/label/label";
import ProfilUserCard from "../../components/profilUser/profilUserCard";
import ButtonFollow from "../../components/buttons/ButtonFollow";
import CardPub from "../../components/cardPub/CardPub";
import postPub1 from "../../assets/images/pub/pub (1).jpg";
import postPub2 from "../../assets/images/pub/pub (2).jpg";
import postPub3 from "../../assets/images/pub/pub (3).jpg";
import postPub4 from "../../assets/images/pub/pub (4).jpg";
const StoryUserContainer = () => {
  return (
    <div className="content__story_user">
      <Swiper
        spaceBetween={15}
        loop={true}
        slidesPerView={8}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {storyUserData.map((item, index) => (
          <SwiperSlide key={index}>
            <StoryUser img={item.img} nameUser={item.nameUser}></StoryUser>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ContentPublicationUser = () => {
  return (
    <section className="section__pulication__fill">
      <CardPub
        profilPicture={storyUserData[0].img}
        classStoryProfil="user-profil-story"
        VerifiedUser={true}
        nameUser={storyUserData[0].nameUser}
        imagePub={postPub1}
        pub_time="12 d"
        like_count={12}
      ></CardPub>
      <CardPub
        profilPicture={storyUserData[2].img}
        classStoryProfil=""
        VerifiedUser={false}
        nameUser={storyUserData[2].nameUser}
        imagePub={postPub2}
        pub_time="2 d"
        like_count={1508}
      ></CardPub>
      <CardPub
        profilPicture={storyUserData[3].img}
        classStoryProfil=""
        VerifiedUser={true}
        nameUser={storyUserData[3].nameUser}
        imagePub={postPub3}
        pub_time="5 d"
        like_count={5}
      ></CardPub>
      <CardPub
        profilPicture={storyUserData[4].img}
        classStoryProfil=""
        VerifiedUser={false}
        nameUser={storyUserData[4].nameUser}
        imagePub={postPub4}
        pub_time="20 d"
        like_count={8}
      ></CardPub>
    </section>
  );
};
const ContentUserFil = () => {
  return (
    <article className="section__article_fil-user">
      <StoryUserContainer></StoryUserContainer>
      <ContentPublicationUser></ContentPublicationUser>
    </article>
  );
};

const UserSuggestionAside = (props) => {
  return (
    <div className="user-suggestion">
      <ProfilUserCard
        img={storyUserData[props.indexProfil].img}
        classStoryProfil={props.storyClass}
      ></ProfilUserCard>
      <div className="user-suggestion-detail">
        <LabelNameUser
          name={props.nameUser}
          isCertified={props.isCertified}
        ></LabelNameUser>
        <p className="followed-user-stats">Followed by sdHerbhs + 1 more</p>
      </div>
      <ButtonFollow></ButtonFollow>
    </div>
  );
};

const SuggestionUserContent = () => {
  return (
    <div className="aside__suggestion_user">
      <UserSuggestionAside
        indexProfil={1}
        nameUser={storyUserData[1].nameUser}
        isCertified={false}
        storyClass="user-profil-story"
      ></UserSuggestionAside>
      <UserSuggestionAside
        indexProfil={2}
        nameUser={storyUserData[2].nameUser}
        isCertified={true}
      ></UserSuggestionAside>
      <UserSuggestionAside
        indexProfil={3}
        nameUser={storyUserData[3].nameUser}
        isCertified={false}
      ></UserSuggestionAside>
      <UserSuggestionAside
        indexProfil={7}
        nameUser={storyUserData[7].nameUser}
        isCertified={true}
        storyClass="user-profil-story"
      ></UserSuggestionAside>
    </div>
  );
};

const FooterAside = () => {
  return (
    <div className="aside__footer">
      <div className="content-link-footer-aside">
        <Link to="/">About .</Link>
        <Link to="/">Help .</Link>
        <Link to="/">Press .</Link>
        <Link to="/">API .</Link>
        <Link to="/">Privacy .</Link>
        <Link to="/">Terms .</Link>
        <Link to="/">Locations .</Link>
        <Link to="/">Language .</Link>
        <Link to="/">English .</Link>
        <Link to="/">Meta Verified .</Link>
      </div>
      <p>© 2023 INSTAGRAM CLONE UI BY NORBERT YEMUANG BOPE</p>
    </div>
  );
};

const ContentAsideFil = () => {
  return (
    <aside className="section__aside-suggestion">
      <div className="aside__title">
        <p className="title">Suggested for you</p>
        <Link to="/" className="link-explore">
          See All
        </Link>
      </div>
      <SuggestionUserContent></SuggestionUserContent>
      <FooterAside></FooterAside>
    </aside>
  );
};
export default function HomePage(props) {
  return (
    <main className="container-page-view" id="home-page-section">
      <ContentUserFil></ContentUserFil>
      <ContentAsideFil></ContentAsideFil>
    </main>
  );
}
