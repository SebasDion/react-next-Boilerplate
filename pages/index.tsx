import type { NextPage } from 'next';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Feature from '../components/feature';
import FeaturesTitle from '../components/featuresTitle';
import logo from '../assets/logo.svg';
import {
  Container,
  FeaturesContainer,
  SectionContainer,
  Title,
  Features,
} from './index.styles';

const Home: NextPage = () => {
  const { t } = useTranslation('general');
  return (
    <Container>
      <SectionContainer>
        <Image src={logo} alt="logo" width={1200} />
      </SectionContainer>
      <SectionContainer>
        <Title>
          <>{t('title')}</>
        </Title>
      </SectionContainer>
      <SectionContainer>
        <FeaturesContainer>
          <FeaturesTitle />
          <Features>
            <Feature
              title="NextJs"
              url="https://nextjs.org/"
              description="The React Framework
              for Production"
            />
            <Feature
              title="Styled components"
              url="https://styled-components.com/"
            />
            <Feature
              title="i18next"
              url="http://i18next.com"
              description="Internationalization-framework"
            />
            <Feature
              title="Husky git hooks"
              url="https://typicode.github.io/husky/#/"
              description="Husky improves your commits"
            />
            <Feature
              title="Lint staged"
              url="https://github.com/okonet/lint-staged"
              description="Run linters against staged git files"
            />
            <Feature
              title="Conventional commit"
              url="https://github.com/compilerla/conventional-pre-commit"
              description="A pre-commit hook to check commit messages for Conventional Commits formatting."
            />
            <Feature title="Typescript" url="https://www.typescriptlang.org/" />
            <Feature title="Jest" url="https://jestjs.io/fr/" />
            <Feature
              title="Testing Library"
              url="https://testing-library.com/"
            />
          </Features>
        </FeaturesContainer>
      </SectionContainer>
    </Container>
  );
};

export default Home;
