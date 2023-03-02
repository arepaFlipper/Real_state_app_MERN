export interface CustomButtonProps {
  type?: string,
  title: string,
  background: string,
  color: string,
  fullWidth?: boolean,
  icon?: ReactNode,
  disable?: boolean,
  handleClick?: () => void
}

export interface ProfileProps {
  trype: string,
  name: string,
  avatar: string,
  email: string,
  properties: Array | undefined,
}

export interface PropertyProps {
  _id: string,
  titile: string,
  description: string,
  location: string,
  price: string,
  photo: string,
  creator: string,
}

export interface FormProps {
  type: string,
  register: any,
  onFinish: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
  formLoading: boolean,
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined,
  handleImageChange: (file) => void,
  onFinishHandler: (data: FieldValues) => Promise<void> | void,
  propertyImage: { name: string, url: string },
}
