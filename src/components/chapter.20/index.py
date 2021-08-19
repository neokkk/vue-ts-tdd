class TestCase:
  def __init__(self, name):
    self.name = name

  def setUp(self):
    pass

  def run(self):
    self.setUp()
    method = getattr(self, self.name)
    method()
    self.tearDown()

class WasRun(TestCase):
  def setUp(self):
    self.wasRun = None
    self.log = 'setUp '

  def testMethod(self):
    self.wasRun = 1
    self.log += 'testMethod '

  def tearDown(self):
    self.log += 'tearDown '

class TestCaseTest(TestCase):
  def setUp(self):
    self.test = WasRun('testMethod')

  def testTemplateMethod(self):
    test = WasRun('testMethod')
    test.run()
    assert(test.log == 'setUp testMethod tearDown ')

  def tearDown(self):
    pass

TestCaseTest('testTemplateMethod').run()
