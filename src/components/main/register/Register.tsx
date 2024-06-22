import { ImmeubleBgLogin } from "@/assets/images/Images";
import { linkClassNames, registerInput } from "@/common/ClassNames";
import { PasswordInput } from "@/components/ui/password-input";
import { Modal } from "flowbite-react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaQuestionCircle } from "react-icons/fa";
import { GoogleLogin, SubmitButton } from "../login/Login";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import {
  registeringUser,
  RegisterInputs,
} from "@/components/interfaces/interfaces";
import { postDatas } from "@/api/Routes";
import { ModeToggle } from "@/components/customs/ModeToggle";
import ConnexionInfo, {
  IdataLogin,
} from "@/components/common/connexionInfo/ConnexionInfo";
import { initializedRegistringData } from "@/constants/variables";
import { GoogleComponent } from "@/components/common/googleLogin/GoogleComponent";
const googleId = import.meta.env.VITE_CLIENT_ID_GOOGLE
export const Register = () => {
  const [data, setData] = useState<registeringUser>(initializedRegistringData);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [haveSubmitedGoogle, setHaveSubmitedGoogle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (haveSubmitedGoogle) {
        setHaveSubmitedGoogle(false);
      }
    }, 100);
  }, [haveSubmitedGoogle]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchDatas();
  };

  const fetchDatas = async () => {
    if (isChecked) postDatas("/api/v1/register", data);
    else
      !isChecked &&
        toast.warn(
          "Veuillez accepter les conditions d'utilisation et la politique de confidentialité"
        );
  };
  const handleDataLogin = (data: IdataLogin) => {
    setData((prevData) => ({ ...prevData, loggin_info: data }));
  };
  return (
    <div>
      <div className="absolute right-10 mt-10">
        <ConnexionInfo handleDataLogin={handleDataLogin} />
        <ModeToggle />
        <GoogleOAuthProvider clientId={googleId}>
          <GoogleComponent
            isChecked={isChecked}
            login_info={data.loggin_info as IdataLogin}
            uri="/api/v1/google/register"
            _haveSumited={haveSubmitedGoogle}
          />
        </GoogleOAuthProvider>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-0 lg:mb-0 flex justify-center items-center"
      >
        <div className="block lg:flex w-[350px] sm:w-[600px] lg:w-[450px] mx-auto justify-center mt-16 sm:mt-20 items-center gap-20">
          <ImageSection />
          <FormSection
            handleHaveSubmitedGoogle={(value: boolean) =>
              setHaveSubmitedGoogle(value)
            }
            handleIsChecked={(value: boolean) => setIsChecked(value)}
            setData={setData}
            data={data}
          />
        </div>
      </form>
    </div>
  );
};

const ImageSection = () => (
  <div className="z-0 ml-20">
    <div className="h-[800px] gap-5 w-[400px] ml-10 hidden lg:inline-flex">
      <img
        className="h-[725px] rounded-lg"
        src={ImmeubleBgLogin}
        alt="luggage caroussel"
      />
    </div>
  </div>
);

const FormSection = ({
  data,
  setData,
  handleIsChecked,
  handleHaveSubmitedGoogle,
}: RegisterInputs) => {
  return (
    <div className="justify-center w-[350px] mx-auto md:w-[600px] items-center px-0 md:px-8 flex flex-col top-[60px] sticky lg:relative right-[5%] md:right-[115px] py-7 z-20 mt-[0px] lg:-mt-[200px] mb-8 lg:mb-0 shadow-sm rounded-xl bg-slate-100 dark:bg-slate-700">
      <FormHeader />
      <FormFields
        handleIsChecked={handleIsChecked}
        setData={setData}
        data={data}
      />
      <SignUpLink />
      <OrDivider />
      <GoogleLogin handleHaveSubmitedGoogle={handleHaveSubmitedGoogle} />
    </div>
  );
};

const FormHeader = () => (
  <>
    <div className="mb-[20px]">
      <p className="text-black dark:opacity-100  dark:text-white text-center text-[30px] font-bold font-['Poppins']">
        S'inscrire
      </p>
    </div>
    <div className="mb-[40px]">
      <p className="opacity-75 dark:opacity-100 text-center dark:text-white text-[#112211] text-base font-normal font-['Montserrat']">
        Préparons-nous à tout mettre en place pour que vous puissiez accéder à
        votre compte personnel.
      </p>
    </div>
  </>
);

const FormFields = ({ setData, data, handleIsChecked }: RegisterInputs) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col md:flex-row items-center gap-3 ">
        <FormField
          pattern="[A-Za-zÀ-ÿ\s]{2,30}"
          title="Uniquement des lettres de l'alphabet français, les accents ne sont pas acceptés, 2 caractères minimum "
          handleChange={handleChange}
          label="Nom"
          type="text"
          name="name"
        />
        <FormField
          pattern="[A-Za-zÀ-ÿ\s]{2,30}"
          title="Uniquement des lettres de l'alphabet français, les accents ne sont pas acceptés, 2 caractères minimum "
          handleChange={handleChange}
          label="Prenom"
          type="text"
          name="firstName"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <FormField
          handleChange={handleChange}
          label="E-mail"
          type="email"
          name="email"
        />
        <RoleSelect handleChange={(e) => setData({ ...data, role: e })} />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <PasswordField
          handleChange={handleChange}
          label="Créer un mot de passe"
          name="password"
        />
        <PasswordField
          handleChange={handleChange}
          label="Confirmer le mot de passe"
          name="passwordConfirmation"
        />
      </div>

      <CheckBoxField handleIsChecked={handleIsChecked} />
      <SubmitButton text="Créer mon compte" />
    </div>
  );
};

const FormField = ({
  label,
  type,
  name,
  handleChange,
  pattern,
  title,
}: {
  label: string;
  type: string;
  name: string;
  pattern?: string;
  title?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex flex-col sm:flex-row items-center gap-3">
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-[#7C838A] dark:text-white rounded-md  text-sm font-['Poppins']"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        title={title}
        pattern={pattern}
        type={type}
        name={name}
        onChange={handleChange}
        className={registerInput}
        required
      />
    </div>
  </div>
);

const RoleSelect = ({
  handleChange,
}: {
  handleChange: (value: string) => void;
}) => (
  <div className="relative flex flex-col">
    <label
      htmlFor="role"
      className="flex items-center gap-1 text-[#7C838A] dark:text-white rounded-md  text-sm font-['Poppins']"
    >
      Role
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>
            <FaQuestionCircle />
          </TooltipTrigger>
          <TooltipContent className="text-[#7C838A] w-96 dark:bg-slate-500 border-none dark:text-white rounded-md  text-sm font-['Poppins']">
            <p>
              Expéditeurs : vous pouvez faire des demandes d'expéditions et
              serez contactés par des voyageurs. <br />
              Voyageurs : vous serez contactés par des expéditeurs. <br />
              Vous pouvez également switcher de rôle une fois connecté.
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </label>
    <Select value="expeditor" onValueChange={handleChange}>
      <SelectTrigger className={`${registerInput} py-[22px] bg-white`}>
        <SelectValue placeholder="Role" />
      </SelectTrigger>
      <SelectContent className="dark:bg-slate-500">
        <SelectItem value="expeditor">Expéditeur</SelectItem>
        <SelectItem value="traveler">Voyageur</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

const PasswordField = ({
  label,
  name,
  handleChange,
}: {
  label: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="relative flex flex-col">
    <label
      htmlFor={name}
      className="text-[#7C838A] dark:text-white rounded-md  text-sm font-['Poppins']"
    >
      {label} <span className="text-red-500">*</span>
    </label>
    <PasswordInput
      onChange={handleChange}
      name={name}
      className={`${registerInput} py-[22px]`}
    />
  </div>
);

const ConditionsModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      size="5xl"
      popup
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header className="dark:bg-slate-700  bg-slate-100 rounded-md" />
      <Modal.Body className="dark:bg-slate-700 bg-slate-100 rounded-md">
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white rounded-md shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md text-slate-700 mx-auto">
                <div className="text-center font-extrabold text-3xl mb-6">
                  Conditions d'utilisation
                </div>
                <div className="prose">
                  <p>
                    Bienvenue sur Rocolis. En accédant à ce site web, nous
                    supposons que vous acceptez ces conditions d'utilisation. Ne
                    continuez pas à utiliser Rocolis si vous n'êtes pas d'accord
                    avec toutes les conditions énoncées sur cette page.
                  </p>
                  <p>
                    La terminologie suivante s'applique à ces Conditions
                    d'utilisation, à la Déclaration de confidentialité et à
                    l'Avis de non-responsabilité, ainsi qu'à tous les accords :
                    "Client", "Vous" et "Votre" font référence à vous, personne
                    accédant à ce site web et acceptant les conditions de la
                    Société. "La Société", "Nous-mêmes", "Nous", "Notre" et
                    "Nous", font référence à notre Société. "Partie", "Parties",
                    ou "Nous", désigne à la fois le Client et nous-mêmes, ou
                    bien le Client ou nous-mêmes. Toutes les conditions font
                    référence à l'offre, à l'acceptation et à la considération
                    du paiement nécessaire pour réaliser le processus de notre
                    assistance au Client de la manière la plus appropriée, que
                    ce soit par des rencontres formelles ou une durée
                    déterminée, ou autrement pour l'objectif expresse de
                    satisfaire les besoins du Client concernant la mise en œuvre
                    de la Société des services/produits stipulés, conformément
                    et selon la loi en vigueur. Toute utilisation du terminatif
                    comme indiqué dans la section résiliation de ces conditions
                    est dans les données s’agit de manière expresse le cas où.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const PrivacyModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      dismissible
      show={openModal}
      size="5xl"
      popup
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header className="dark:bg-slate-700  bg-slate-100 rounded-md" />
      <Modal.Body className="dark:bg-slate-700 bg-slate-100 rounded-md">
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto text-slate-700">
                <div className="text-center font-extrabold text-3xl mb-6">
                  Politique de confidentialité
                </div>
                <div className="prose">
                  <p>
                    Votre vie privée est extrêmement importante pour nous. Cette
                    politique de confidentialité documente les types
                    d'informations personnelles que nous recevons et collectons
                    lorsque vous utilisez Rocolis, ainsi que certaines des
                    mesures que nous prenons pour sauvegarder ces informations.
                    Nous espérons que cette politique vous aidera à prendre des
                    décisions éclairées concernant le partage de vos
                    informations personnelles avec nous.
                  </p>
                  <p>
                    <span className="font-bold">
                      Collecte d'informations personnelles :
                    </span>{" "}
                    Lorsque vous visitez Rocolis, nous collectons
                    automatiquement certaines informations sur votre appareil, y
                    compris des informations sur votre navigateur web, votre
                    adresse IP, votre fuseau horaire et certains des cookies
                    installés sur votre appareil. De plus, lorsque vous naviguez
                    sur notre site, nous recueillons des informations sur les
                    pages web ou les produits que vous consultez, les sites web
                    ou les termes de recherche qui vous ont amené à notre site,
                    et les façons dont vous interagissez avec notre site.
                  </p>
                  <p>
                    <span className="font-bold">
                      Partage des informations :
                    </span>{" "}
                    Nous ne partageons pas vos informations personnelles avec
                    des tiers, sauf si cela est nécessaire pour fournir un
                    service ou pour se conformer à la loi. Nous pouvons utiliser
                    vos informations personnelles pour vous contacter concernant
                    votre compte, pour résoudre des différends, pour collecter
                    des frais ou des montants dus, ou pour enquêter sur des
                    activités suspectes.
                  </p>
                  <p>
                    <span className="font-bold">Sécurité :</span> Nous prenons
                    des mesures raisonnables pour protéger vos informations
                    personnelles contre la perte, l'utilisation abusive, l'accès
                    non autorisé, la divulgation, l'altération ou la
                    destruction.
                  </p>
                  <p>
                    <span className="font-bold">
                      Modifications de la politique de confidentialité :
                    </span>{" "}
                    Nous nous réservons le droit de modifier cette politique de
                    confidentialité à tout moment. Les modifications et
                    clarifications prendront effet immédiatement après leur
                    publication sur le site web.
                  </p>
                  <p>
                    Pour toute question concernant notre politique de
                    confidentialité, vous pouvez nous contacter à l'adresse
                    suivante : contact@rocolis.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const CheckBoxField = ({
  handleIsChecked,
}: {
  handleIsChecked: (value: boolean) => void;
}) => {
  const [isPrivacyModal, setIsPrivacyModal] = useState(false);
  const [isConditionsModal, setIsConditionsModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-wrap text-center mt-5 mb-5 gap-2 items-center justify-center w-full">
      <ToastContainer />
      <div className="ms-2 text-sm flex gap-2 flex-wrap items-center justify-center font-medium text-gray-900 dark:text-gray-300">
        J'accepte toutes les
        <p
          onClick={() => setIsConditionsModal(true)}
          className={linkClassNames}
        >
          conditions{" "}
        </p>
        et
        <p onClick={() => setIsPrivacyModal(true)} className={linkClassNames}>
          politiques de confidentialité{" "}
        </p>
      </div>
      <input
        onChange={() => {
          handleIsChecked(!isChecked), setIsChecked(!isChecked);
        }}
        id="default-checkbox"
        type="checkbox"
        checked={isChecked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {isConditionsModal && (
        <ConditionsModal
          setOpenModal={setIsConditionsModal}
          openModal={isConditionsModal}
        />
      )}
      {isPrivacyModal && (
        <PrivacyModal
          setOpenModal={setIsPrivacyModal}
          openModal={isPrivacyModal}
        />
      )}
    </div>
  );
};

const SignUpLink = () => (
  <div className="text-center mb-[30px] flex justify-center">
    <p className="text-neutral-900 dark:text-white text-center mt-5 text-sm font-medium font-['Montserrat']">
      Vous avez déjà un compte ?
      <NavLink to="/login" className={linkClassNames}>
        {" "}
        Se connecter
      </NavLink>
    </p>
  </div>
);

const OrDivider = () => (
  <div className="flex mx-32 justify-center items-center gap-3 mb-5">
    <div className="grow shrink basis-5  md:w-[200px] h-[1px] opacity-25 bg-neutral-900 dark:bg-white" />
    <p className="opacity-50 dark:text-white dark:opacity-100 text-neutral-900 text-sm font-normal font-['Montserrat']">
      Ou
    </p>
    <div className="grow shrink basis-5 w-[200px] h-[1px] opacity-25 bg-neutral-900 dark:bg-white" />
  </div>
);
