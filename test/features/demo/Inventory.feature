Feature: Inventory

  @demo @smoke
  Scenario Outline: Demo Inventory
    Given Login to inventory web app
    Then Inventory page should list <NumberOfProducts> products
#    Then Validate all products have valid price

    Examples:
      | TestID     | NumberOfProducts |
      | INTV_TC002 | 6                |