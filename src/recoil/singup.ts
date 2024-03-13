import { atom,selector,useSetRecoilState } from "recoil";

export const signupState = atom({
  key: "signupState",
  default: {
    contactInfo:"",
    name: "",
    id:"",
    password: "",
  },
});
export const birthdayState = atom({
  key: "birthdayState",
  default: {
    year:"",
    month: "",
    day:"",
  },
});

export interface TermsOfServiceState {
  all: boolean;
  termsOfUse: boolean;
  dataPolicy: boolean;
  locationBased: boolean;
  [key: string]: boolean;
}

export const termsOfService = atom<TermsOfServiceState>({
  key: "termsOfService",
  default: {
      all: false,
      termsOfUse: false,
      dataPolicy: false,
      locationBased: false,
  },
});

// 모든 약관 동의 상태를 자동으로 갱신하는 selector
export const allAgreementsState = selector<boolean>({
  key: 'allAgreementState',
  get: ({ get }) => {
      const { termsOfUse, dataPolicy, locationBased } = get(termsOfService);
      return termsOfUse && dataPolicy && locationBased;
  },
});


export const setTermsOfService = () => {
  const setTerms = useSetRecoilState(termsOfService);

  const updateAll = () => {
      setTerms((prev) => ({
          ...prev,
          termsOfUse: true,
          dataPolicy: true,
          locationBased: true,
      }));
  };

  return updateAll;
};