import { AllProductsModule } from './all-products.module';

describe('AllProductsModule', () => {
  let allProductsModule: AllProductsModule;

  beforeEach(() => {
    allProductsModule = new AllProductsModule();
  });

  it('should create an instance', () => {
    expect(allProductsModule).toBeTruthy();
  });
});
