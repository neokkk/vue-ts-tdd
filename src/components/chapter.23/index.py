class TestCase:
  def __init__(self, name):
    self.name = name

  def setUp(self):
    pass

  def run(self, result):
    result.testStarted()
    self.setUp()
    try:
      method = getattr(self, self.name)
      method()
    except:
      result.testFailed()
    self.tearDown()

class WasRun(TestCase):
  def setUp(self):
    self.wasRun = None
    self.log = 'setUp '

  def testMethod(self):
    self.wasRun = 1
    self.log += 'testMethod '

  def testBrokenMethod(self):
    raise Exception

  def tearDown(self):
    self.log += 'tearDown '

class TestCaseTest(TestCase):
  def setUp(self):
    self.test = WasRun('testMethod')
    self.result = TestResult()

  def testTemplateMethod(self):
    test = WasRun('testMethod')
    test.run(self.result)
    assert(test.log == 'setUp testMethod tearDown ')

  def testResult(self):
    test = WasRun('testMethod')
    test.run(self.result)
    assert(self.result.summary() == '1 run, 0 failed')

  def testFailedResult(self):
    test = WasRun('testBrokenMethod')
    test.run(self.result)
    assert(self.result.summary() == '1 run, 1 failed')

  def testFailedResultFormatting(self):
    self.result.testStarted()
    self.result.testFailed()
    assert(self.result.summary() == '1 run, 1 failed')

  def testSuite(self):
    suite = TestSuite()
    suite.add(TestCaseTest('testMethod'))
    suite.add(TestCaseTest('testBrokenMethod'))
    suite.add(TestCaseTest('testFailedResultFormatting'))
    suite.add(TestCaseTest('testFailedResult'))
    suite.add(TestCaseTest('testSuite'))
    suite.run(self.result)
    print(self.result.summary())

  def tearDown(self):
    pass

class TestResult:
  def __init__(self):
    self.runCount = 0
    self.failureCount = 0

  def testStarted(self):
    self.runCount += 1

  def testFailed(self):
    self.failureCount += 1

  def summary(self):
    return '%d run, %d failed' %(self.runCount, self.failureCount)

class TestSuite:
  def __init__(self):
    self.tests = []

  def add(self, test):
    self.tests.append(test)

  def run(self, result):
    for test in self.tests:
      test.run(result)

TestCaseTest('testSuite').run()
