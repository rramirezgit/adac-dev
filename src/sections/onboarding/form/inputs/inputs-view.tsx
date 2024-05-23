import { Box } from 'src/components/Box/box-component';
import OnBoardingTextArea from './text-area';
import OnBoardingButtons from './buttons';
import { FieldOnboarding, inputsOnboarding } from '../types';
import OnBoardingMultiButtons from './multi-buttons';
import OnBoardingTextAndImage from './text-image';
import OnBoardingSelect from './select';
import OnBoardingMultiChecbox from './multiCheckbox';
import WhatsAppView from '../../whatsApp-view/whatsApp';
import WhatsAppInput from './WhatsAppInput';
import InputNumber from './Input-number';

interface InputsViewProps {
  field: FieldOnboarding;
}

export default function InputsView({ field }: InputsViewProps) {
  if (field.type === inputsOnboarding.textArea) {
    return <OnBoardingTextArea {...field} />;
  }

  if (field.type === inputsOnboarding.buttons) {
    return <OnBoardingButtons options={field.options as string[]} {...field} />;
  }

  if (field.type === inputsOnboarding.select) {
    return <OnBoardingSelect {...field} />;
  }

  if (field.type === inputsOnboarding.multiButtons) {
    return <OnBoardingMultiButtons options={field.options as string[]} {...field} />;
  }

  if (field.type === inputsOnboarding.textAndImage) {
    return <OnBoardingTextAndImage {...field} />;
  }

  if (field.type === inputsOnboarding.multiChecbok) {
    return <OnBoardingMultiChecbox {...field} />;
  }

  if (field.type === inputsOnboarding.telfNumber) {
    return <WhatsAppInput {...field} />;
  }

  if (field.type === inputsOnboarding.number) {
    return <InputNumber {...field} />;
  }
}
