import { pascalCase } from "../strings";

class PropertyBuilder {
  private creator?: { name: string, method?: string };
  private getter?: { name: string, valueMember?: string };
  private setter?: { name: string };  
  private members: PropertyBuilder[] = [];

  constructor(private name: string, private type: string) {}

  public withMember(name: string, type: string, callback: (builder: PropertyBuilder) => PropertyBuilder) {
    const member = callback(new PropertyBuilder(name, type));
    if (member) {
        this.members.push(member);
    }
    return this;
  }

  public withCreator(name: string, method?: string) {
    this.creator = { name, method };
    return this;
  }

  public withGetter(name: string, valueMember?: string) {
    this.getter = { name, valueMember };
    return this;
  }

  public withSetter(name: string) {
    this.setter = { name };
    return this;
  }

  build() {
    return {
      name: this.name,
      type: this.type,
      asPublicProperty: (readonly?: boolean) => {
        return `public ${readonly ? "readonly " : ""}${this.name}: ${this.type};`;
      },
      asParameter: () => {
        return `${this.name}: ${this.type}`;
      }
    };
  }
}
