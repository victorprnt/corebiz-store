import styled from "styled-components";
import theme from "styles/theme/light";

export const HeaderWrapper = styled.header`
  width: 100%;
  /* height: 80px; */
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  img {
    margin-right: 120px;
  }

  .search {
    width: 720px;
    height: 1.5rem;
    margin-right: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${theme.colors.gray};

    input {
      width: 90%;
      height: 80%;
      padding: 0.25rem;
      border: none;
      background-color: rgba(0,0,0,0);

      &::placeholder {
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        color: ${theme.colors.gray};
      }
    }
  }

  .user {
    display: flex;
    align-items: center;

    margin-right: 1.5rem;

    svg {
      margin-right: 0.5rem;
    }

    span {
      font-weight: 400;
      font-size: 13px;
      line-height: 17px;
      color: ${theme.colors.gray};
    }
  }

  .cart {
    display: flex;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 1.25rem;
      height: 1.25rem;
      margin-left: 0.5rem;

      color: #fff;
      background-color: ${theme.colors.red};
      border-radius: 50%;

    }
  }

  @media (max-width: ${theme.screenSize.laptop}) { }
  @media (max-width: ${theme.screenSize.tablet}) { }
  @media (max-width: ${theme.screenSize.mobileL}) {
    display: flex;
    flex-direction: column;

    .menu {
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;

      img {
        widows: 109px;
        height: 25px;
        margin: 0;
      }
    }

    .search {
      width: 95%;
      margin: 0;
    }
  }
`;
