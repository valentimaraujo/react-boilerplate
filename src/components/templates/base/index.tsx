export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate = ({ sampleTextProp }:IBaseTemplate) => (
  <div>{sampleTextProp}</div>
);

export default BaseTemplate;
