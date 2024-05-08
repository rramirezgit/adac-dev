// sections
import OnBoardingLayout from 'src/layouts/onBoarding/onboarding_layout';
import OnboardingView from 'src/sections/onboarding/onboarding-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Onboarding',
};

export default function OnBoardingPage() {
  return (
    <OnBoardingLayout>
      <OnboardingView />
    </OnBoardingLayout>
  );
}
